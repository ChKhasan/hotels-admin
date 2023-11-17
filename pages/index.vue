<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px]">
      <div
        class="rounded-[10px] search-block border border-solid relative flex items-center"
      >
        <input
          type="text"
          class="w-full px-5 py-[10px]"
          placeholder="Oilaviy mehmon uyi nomini kiriting"
        />
        <svg
          class="absolute right-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="body">
      <a-table
        :columns="columnOrders"
        :data-source="orders"
        class="custom-table"
        :loading="loading"
        :pagination="false"
        align="center"
      >
        <span slot="status" slot-scope="text">
          <span
            :class="{
              'status-active': text == 'active',
              'status-inactive': text == 'inactive',
            }"
          >
            {{ text }}
          </span>
        </span>
        <span
          slot="phone_number"
          class="flex justify-between items-center cursor-pointer"
          slot-scope="text"
        >
          {{ text }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.61914 3.95312L13.6658 7.99979L9.61914 12.0465"
              stroke="#092D53"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.33398 8H13.554"
              stroke="#092D53"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination />
    </div>
  </div>
</template>

<script>
import VPagination from "@/components/VPagination.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      loading: false,
      columnOrders: [
        {
          title: "Reyestr raqami",
          dataIndex: "reId",
          key: "reId",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "reId" },
          className: "column-text",
        },
        {
          title: "Mehmon uyi nomi",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-text",
        },
        {
          title: "Mehmon uyi direktori",
          dataIndex: "derictor",
          key: "derictor",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "derictor" },
          className: "column-text",
        },
        {
          title: "Mehmon uyi joylashgan hudud",
          dataIndex: "place",
          key: "place",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "place" },
          className: "column-text",
        },
        {
          title: "Mehmon uyi holati",
          dataIndex: "status",
          key: "status",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
          className: "column-status",
        },
        {
          title: "Mehmon uyi telefon raqami",
          dataIndex: "phone_number",
          key: "phone_number",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "phone_number" },
          className: "column-text",
        },
      ],
      orders: [
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "active",
          phone_number: "+998 93 251-56-36",
        },
        {
          reId: "000386",
          name: "Lux Family Guesthouse",
          derictor: "Abdullayev Iskandar Yuldashevich",
          place: "Toshkent shahri",
          status: "inactive",
          phone_number: "+998 93 251-56-36",
        },
      ],
    };
  },
  components: {
    VPagination,
  },
};
</script>
<style lang="css" scoped>
/* table  */
:deep(.ant-table-row:nth-child(2n) td) {
  background-color: var(--blue-bold);
}
:deep(.ant-table-row:nth-child(2n) td:first-child),
:deep(.ant-table-thead > tr > th:first-child) {
  border-radius: 5px 0 0 5px;
}
:deep(.ant-table-row:nth-child(2n) td:last-child),
:deep(.ant-table-thead > tr > th:last-child) {
  border-radius: 0 5px 5px 0;
}
.custom-table :deep(.column-text),
.custom-table :deep(.column-status) {
  font-family: var(--v-regular);
  color: var(--blue-bold);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
:deep(.ant-table-column-title) {
  font-family: var(--v-regular);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
:deep(.ant-table-row:nth-child(2n) .column-text) {
  color: #fff;
}
:deep(.ant-table-row:nth-child(2n) .column-text span svg path) {
  stroke: #fff;
}
:deep(.ant-table-thead > tr > th) {
  background-color: var(--blue-grey);
}

:deep(.ant-table-thead .column-text) {
  color: #fff;
}
:deep(.ant-table-thead > tr > th, .ant-table-tbody > tr > td) {
  padding: 10px 20px;
}
:deep(.column-status .status-active) {
  color: var(--green);
}
:deep(.column-status .status-inactive) {
  color: var(--red-dark);
}
:deep(.ant-table-tbody
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td) {
  background-color: rgba(255, 255, 255, 0.36);
}
/* table  */
.search-block {
  border-color: rgba(0, 0, 0, 0.3);
}
</style>
