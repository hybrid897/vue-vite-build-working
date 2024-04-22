<template>
  <div>
    <main
      class="pb-3"
      role="main"
    >
      <div class="flex min-h-screen flex-col">
        <div class="flex min-h-[80px] items-center justify-center bg-lime-900">
          <slot name="header" />
        </div>

        <slot name="body" />
        <div class="mt-auto"></div>
      </div>
    </main>
  </div>
</template>
