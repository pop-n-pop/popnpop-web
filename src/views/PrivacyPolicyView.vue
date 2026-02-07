<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="header3-bold mb-6">개인정보처리방침</h1>
        
        <section class="mb-8">
          <h2 class="header4-bold mb-4">1. 수집하는 개인정보 항목</h2>
          <p class="body1-medium color-gray700">
            팝앤팝은 서비스 제공을 위해 최소한의 개인정보를 수집할 수 있습니다. 수집된 정보는 서비스 개선 및 광고 제공을 효율적으로 관리하기 위해 사용됩니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">2. 쿠키 및 광고 식별자</h2>
          <p class="body1-medium color-gray700">
            당사는 Google AdSense를 포함한 타사 광고 시스템을 사용하여 광고를 게재할 수 있습니다. Google과 같은 서드 파티 업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.
          </p>
          <p class="body1-medium color-gray700 mt-2">
            사용자는 <a href="https://www.google.com/settings/ads" target="_blank">광고 설정</a>을 방문하여 타겟팅 광고를 해제할 수 있습니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">3. 개인정보의 보유 및 이용기간</h2>
          <p class="body1-medium color-gray700">
            개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="header4-bold mb-4">4. 문의처</h2>
          <p class="body1-medium color-gray700">
            개인정보 보호 관련 문의는 다음 메일로 연락해 주시기 바랍니다: <br>
            <strong>hi.popnpop@gmail.com</strong>
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
// No logic needed for static policy page
</script>

<style scoped>
section p {
  line-height: 1.6;
}
</style>
