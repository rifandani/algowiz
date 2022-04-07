<template>
  <div class="q-pa-md" style="max-width: 400px">
    <!-- #region NOTE: Data Structures -->
    <q-list bordered padding class="mb-4">
      <q-item-label header overline>DATA STRUCTURES</q-item-label>

      <q-item>
        <q-item-section>
          <q-item-label caption
            >A data structure is a particular way of organizing and storing data
            in a computer so that it can be accessed and modified efficiently.
          </q-item-label>
          <q-item-label caption
            >More precisely, a data structure is a collection of data values,
            the relationships among them, and the functions or operations that
            can be applied to the data.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <!-- #region Linked List -->
      <q-item to="/data-structures/linked-list" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Linked List</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Doubly Linked List -->
      <q-item to="/data-structures/doubly-linked-list" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Doubly Linked List</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Queue -->
      <q-item to="/data-structures/queue" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Queue</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Stack -->
      <q-item to="/data-structures/stack" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Stack</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Hash Table -->
      <q-item to="/data-structures/hash-table" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Hash Table</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Heap -->
      <q-item to="/data-structures/heap" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Heap</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Priority Queue -->
      <q-item to="/data-structures/priority-queue" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Priority Queue</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Graph -->
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Graph</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Disjoint Set -->
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Disjoint Set</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Bloom Filter -->
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Bloom Filter</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Trie -->
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Trie</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Tree -->
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Tree</q-item-label>
          <q-item-label caption>Description here</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />
    </q-list>
    <!-- #endregion -->

    <!-- #region NOTE: Algorithms -->
    <q-list bordered padding class="mb-4">
      <q-item-label header>Algorithms</q-item-label>

      <q-item>
        <q-item-section>
          <q-item-label caption
            >An algorithm is an unambiguous specification of how to solve a
            class of problems.
          </q-item-label>
          <q-item-label caption
            >It is a set of rules that precisely define a sequence of
            operations.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <!-- #region Linked List -->
      <q-item to="/algorithms/linked-lists/straight-traversal" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Straight Traversal</q-item-label>
          <q-item-label caption>Linked Lists algorithm</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>

      <q-item to="/algorithms/linked-list/reverse-traversal" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Reverse Traversal</q-item-label>
          <q-item-label caption>Linked Lists algorithm</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />

      <!-- #region Strings -->
      <q-item to="/algorithms/strings/hamming-distance" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Hamming Distance</q-item-label>
          <q-item-label caption>Strings algorithm</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>

      <q-item to="/algorithms/strings/palindrome" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Palindrome</q-item-label>
          <q-item-label caption>Strings algorithm</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Beginner" color="green" />
        </q-item-section>
      </q-item>

      <q-item to="/algorithms/strings/lavenshtein-distance" exact>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Lavenshtein Distance</q-item-label>
          <q-item-label caption>Strings algorithm</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="Advanced" color="red" />
        </q-item-section>
      </q-item>
      <!-- #endregion -->

      <q-separator spaced inset="item" />
    </q-list>
    <!-- #endregion -->
  </div>
</template>
