<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { nanoid } from 'nanoid'

  interface NodeData {
    id: string
    createdAt: number
    payload: number
  }

  interface Node {
    data: NodeData
    next: Node | null
  }

  interface LinkedList {
    head: Node | null
    tail: Node | null
  }

  const ll = ref<LinkedList>({
    head: null,
    tail: null,
  })
  const step = ref(0)
  // const llArray = computed(() => ll.value.toArray())

  const llToArray = (): Node[] => {
    const nodes: Node[] = []
    let currentNode: Node | null = ll.value.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  const onReset = (): void => {
    step.value = 0

    ll.value.head = null
    ll.value.tail = null
  }

  const onAppend = (): void => {
    step.value++

    const nodeData: NodeData = {
      id: nanoid(16),
      createdAt: Date.now(),
      payload: step.value++,
    }

    const node: Node = {
      data: nodeData,
      next: null,
    }

    if (!ll.value.head) {
      // If there is no head yet, then make new node a head.
      ll.value = {
        head: node,
        tail: node,
      }
    } else {
      // If there is head, attach new node to the end of linked list.
      const deepCopy: LinkedList = JSON.parse(JSON.stringify(ll.value))

      ll.value = {
        ...deepCopy,
        tail: {
          data: nodeData,
          next: node,
        },
      }
    }
  }
</script>

<template>
  <h1 class="text-3xl font-bold">Data Structure - Linked List</h1>

  <q-btn
    v-if="ll.head"
    push
    label="Reset"
    color="white"
    text-color="primary"
    class="q-mb-md mr-2"
    @click="onReset"
  />

  <q-btn
    push
    label="Append"
    color="primary"
    text-color="white"
    class="q-mb-md"
    @click="onAppend"
  />

  <q-stepper
    v-if="ll.head"
    ref="stepper"
    v-model="step"
    header-nav
    color="primary"
    animated
  >
    <q-step
      v-for="item in llToArray()"
      :key="item.data.id"
      icon="add_comment"
      caption="Tail"
      :title="`Node ${item.data.id}`"
      :name="item.data.createdAt"
      :done="step > 1"
      :header-nav="step > 1"
    >
      Value = {{ item.data.payload }}
    </q-step>
  </q-stepper>
</template>
