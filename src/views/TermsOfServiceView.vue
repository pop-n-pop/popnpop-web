<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="header3-bold mb-6">이용약관</h1>
        
        <section class="mb-8">
          <h2 class="header4-bold mb-4">1. 목적</h2>
          <p class="body1-medium color-gray700">
            본 약관은 팝앤팝(이하 "회사")이 제공하는 팝업스토어 정보 제공 서비스의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">2. 서비스의 내용</h2>
          <p class="body1-medium color-gray700">
            회사는 사용자에게 팝업스토어 위치 정보, 운영 정보, 리뷰 및 큐레이션 콘텐츠를 제공합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">3. 이용자의 의무</h2>
          <p class="body1-medium color-gray700">
            이용자는 본 서비스를 통해 얻은 정보를 상업적으로 재배포하거나 무단 복제할 수 없습니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">4. 면책 조항</h2>
          <p class="body1-medium color-gray700">
            팝앤팝에서 제공하는 정보는 팝업스토어 운영 상황에 따라 다를 수 있으며, 정보의 정확성에 대해 최선을 다하지만 그에 따른 책임을 지지는 않습니다. 방문 전 공식 채널을 확인하시기 바랍니다.
          </p>
        </section>

        <div class="mt-12">
          <v-btn variant="text" to="/home" class="color-main1">홈으로 돌아가기</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No logic needed for static terms page
</script>

<style scoped>
section p {
  line-height: 1.6;
}
</style>
