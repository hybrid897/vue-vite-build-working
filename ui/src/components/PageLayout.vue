<template>
  <div>
    <main
      class="pb-3"
      role="main"
    >
      <div class="flex min-h-[60vh] flex-col">
        <div class="flex min-h-[80px] items-center justify-center bg-lime-900">
          <slot name="header" />
        </div>
      </div>
      <slot name="body" />
    </main>
  </div>
</template>
