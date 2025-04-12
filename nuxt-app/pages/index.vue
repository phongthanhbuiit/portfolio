<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="w-full px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
        <div class="flex-col justify-end items-center lg:gap-16 gap-10 flex">
          <div class="mb-4">
            <h1 class="text-center text-5xl font-extrabold tracking-tight">
              <span class="inline-block py-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Thompson Bui</span>
            </h1>
            <p class="text-center text-gray-400 text-sm mt-1">Fullstack Developer</p>
          </div>
          <div class="flex-col justify-center items-center gap-10 flex">
            <div class="flex-col justify-start items-center gap-2.5 flex">
              <h2 class="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">Coming Soon</h2>
              <p class="text-center text-gray-500 text-base font-normal leading-relaxed">Just {{ daysRemaining }} days remaining until the big reveal of our new portfolio!</p>
            </div>
            <div class="flex items-start justify-center w-full gap-2 count-down-main">
              <div class="timer flex flex-col gap-0.5">
                <div>
                  <h3 class="text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.days }}</h3>
                </div>
                <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
              </div>
              <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
              <div class="timer flex flex-col gap-0.5">
                <div>
                  <h3 class="text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.hours }}</h3>
                </div>
                <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
              </div>
              <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
              <div class="timer flex flex-col gap-0.5">
                <div>
                  <h3 class="text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.minutes }}</h3>
                </div>
                <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
              </div>
              <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
              <div class="timer flex flex-col gap-0.5">
                <div>
                  <h3 class="text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.seconds }}</h3>
                </div>
                <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">SECS</p>
              </div>
            </div>
            <div class="w-full flex-col justify-center items-center gap-5 flex">
              <h6 class="text-center text-emerald-400 text-base font-semibold leading-relaxed">Launched Date: May 01, 2025</h6>
              <div class="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                <input 
                  v-model="email" 
                  type="text" 
                  class="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex" 
                  placeholder="Type your mail..."
                >
                <button 
                  class="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                  @click="notifyMe"
                >
                  <span class="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">Notify Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm font-normal leading-snug">
          Get in touch with us: <a href="mailto:phongthanhbuiit@gmail.com" class="hover:text-gray-100 transition-all duration-700 ease-in-out">phongthanhbuiit@gmail.com</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const email = ref('');
const launchDate = new Date("May 01, 2025 00:00:00").getTime();
const countdown = reactive({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
});

// Calculate days remaining for the text
const now = new Date().getTime();
const timeRemaining = launchDate - now;
const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

// Function to notify
const notifyMe = () => {
  if (!email.value) {
    alert('Please enter your email address');
    return;
  }
  
  // In a real app, you would send this to your backend
  alert(`Thank you! We'll notify ${email.value} when we launch.`);
  email.value = '';
};

// Update countdown timer
const updateCountdown = () => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  // If countdown has ended, reset it to next month
  if (diff <= 0) {
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    if (nextMonthDate.getMonth() === 0) {
      nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.days = days < 10 ? `0${days}` : days.toString();
  countdown.hours = hours < 10 ? `0${hours}` : hours.toString();
  countdown.minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  countdown.seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
};

// Start the countdown
let timer: number | undefined;
onMounted(() => {
  updateCountdown(); // Update immediately on mount
  timer = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) window.clearInterval(timer);
});
</script>
