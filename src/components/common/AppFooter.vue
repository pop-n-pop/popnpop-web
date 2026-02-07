<template>
  <v-footer class="bg-gray50 py-10 border-t">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <div class="mb-4">
            <v-img
              src="@/assets/logo/popnpop_logo.svg"
              width="100"
              class="mx-auto mb-4"
              style="filter: grayscale(1); opacity: 0.6;"
            ></v-img>
            <p class="body2-medium color-gray500">
              취향저격 팝업스토어 정보 플랫폼, 팝앤팝(POP&POP)
            </p>
          </div>

          <div class="d-flex justify-center mb-6">
            <router-link to="/privacy" class="footer-link mx-4 body2-bold color-gray600">개인정보처리방침</router-link>
            <router-link to="/terms" class="footer-link mx-4 body2-bold color-gray600">이용약관</router-link>
            <a href="mailto:hi.popnpop@gmail.com" class="footer-link mx-4 body2-bold color-gray600">문의하기</a>
          </div>

          <div class="body3-medium color-gray400">
            &copy; {{ new Date().getFullYear() }} POP&POP. All rights reserved.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer-link {
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #322E42 !important;
}
.bg-gray50 {
  background-color: #F8F9FA;
}
.border-t {
  border-top: 1px solid #EEEEEE;
}
</style>
