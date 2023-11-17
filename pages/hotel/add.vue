<template lang="html">
  <div class="create-hotel max-w-[1536px] mx-auto py-[60px]">
    <div class="">
      <a-form-model :model="form" ref="ruleForm" :rules="rules">
        <div class="flex flex-col gap-10">
          <div class="grid grid-cols-2 gap-6">
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Oilaviy mehmon uyi nomi"
            >
              <a-input v-model="text" placeholder="Mehmonxona nomi" />
            </a-form-model-item>
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Oilaviy mehmon uyi joylashgan hudud"
            >
              <a-select v-model="sort" placeholder="Mehmonxona manzili" class="w-full">
                <a-select-option
                  :value="region"
                  v-for="region in [1, 2, 3, 4]"
                  :key="region"
                >
                  {{ region }}</a-select-option
                >
              </a-select></a-form-model-item
            >
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (O‘Z)"
            >
              <a-input v-model="text" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (RU)"
            >
              <a-input v-model="text" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (EN)"
            >
              <a-input v-model="text" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Xaritada joylashuv uzunlik nuqtasi"
            >
              <a-input v-model="text" placeholder="Uzunlik nuqtasini kiriting" />
            </a-form-model-item>
            <a-form-model-item
              prop="deadline"
              class="form-item w-full mb-0"
              label="Xaritada joylashuv kenglik nuqtasi"
            >
              <a-select
                v-model="sort"
                placeholder="Kenglik nuqtasini kiriting"
                class="w-full"
              >
                <a-select-option
                  :value="region"
                  v-for="region in [1, 2, 3, 4]"
                  :key="region"
                >
                  {{ region }}</a-select-option
                >
              </a-select></a-form-model-item
            >
          </div>
          <div class="buttons flex justify-center gap-6">
            <button
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
            >
              Bekor qilish
            </button>
            <button
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
            >
              Saqlash
            </button>
          </div>
        </div>
      </a-form-model>
    </div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ borderRadius: '20px' }"
      centered
      :closable="false"
      width="748px"
      @ok="handleOk"
    >
      <div>
        <div class="head">
          <h4 class="text-[24px] font-[verdana-700] text-blue-bold text-center">
            Oilaviy mehmon uyi faoliyati holatini o‘zgartirish
          </h4>
        </div>
        <div class="body pt-[30px] mb-[140px] flex justify-center">
          <div class="flex flex-col items-start">
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              Joriy holat: <span class="font-[verdana-700] text-green">Aktiv</span>
            </p>
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              O‘zgaradigan holati:
              <span class="font-[verdana-700] text-red-dark">To‘xtatilgan</span>
            </p>
          </div>
        </div>
        <div class="buttons grid grid-cols-2 gap-[30px]">
          <button
          @click="handleOk"
            class="py-[13px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
          >
            Bekor qilish
          </button>
          <button
            class="py-[13px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      rules: {},
      text: "",
      sort: undefined,
      visible: false,
    };
  },
  methods: {
    handleOk() {
      this.visible = false;
    },
  },
};
</script>
<style lang="css" scoped>
/* form  */
.form-item :deep(label) {
  font-family: var(--v-regular);
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.form-item :deep(.ant-form-item-label) {
  line-height: 0;
  margin-bottom: 6px;
}
.form-item :deep(.ant-input) {
  padding: 10px 20px;
  color: #5a5a5a;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  height: 50px;
}
.form-item :deep(.ant-select-selection--single) {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  height: 50px;
  color: #5a5a5a;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
:deep(.ant-form-item) {
  margin-bottom: 0;
}
/* form  */
:deep(.ant-modal-body) {
  padding: 40px 45px;
}
:deep(.ant-modal-content) {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(16px);
}
</style>
