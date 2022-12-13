<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Tab, TabsContent, TabsWrapper } from '@ocrv/vue-tailwind-tabs';
import PrismCodeTab from "./PrismCodeTab.vue";
import { ref } from "vue";
type Tab = string
interface Data {
    activeTab: Tab
};

const activeTab = ref<string>("PHP");

const clickTab = (name: Tab): void => {
    activeTab.value = name
};

const composer = ref(``);
const composerLaravel = ref(``);
const codeBlock = ref(``);
const configFile = ref(``);
const envFile = ref(``);
const codeSMSController = ref(``);

const animateCodeSMSController = () => {
    const code = ref(`use App\Http\Controllers\Controller; 

  use Illuminate\Http\Request; 

  use SMS; 

  class YourController extends Controller

  { 

    public function sendSms() 

    { 

      $result = SMS::ready()->message('hello')->to('0712345678')->send() 

    } 

  } `);
    let index = 0;
    const typingInterval = setInterval(() => {
        codeSMSController.value += code.value[index]
        index++
        if (index >= code.value.length) {
            clearInterval(typingInterval)
        }
    }, 200)
}

const animateEnvFile = () => {
    const code = ref(`FUTUREFAST_SMS_APP_ID=8HFHA9 
FUTUREFAST_SMS_APP_SECRET=your-app-secret`);
    let index = 0;
    const typingInterval = setInterval(() => {
        envFile.value += code.value[index]
        index++
        if (index >= code.value.length) {
            clearInterval(typingInterval)
        }
    }, 150)
}

const animateConfigFile = () => {
    const code = ref(`$ php artisan vendor:publish`);
    let index = 0;
    const typingInterval = setInterval(() => {
        configFile.value += code.value[index]
        index++
        if (index >= code.value.length) {
            clearInterval(typingInterval)
        }
    }, 150)
};

const animateComposerLaravel = () => {
    const code = ref(`$ composer require futurefast/tradesk`);
    let index = 0;
    const typingInterval = setInterval(() => {
        composerLaravel.value += code.value[index]
        index++
        if (index >= code.value.length) {
            clearInterval(typingInterval)
        }
    }, 100)
};

const animateComposer = () => {
    const code = ref(`$ composer require futurefast/tradesk`);
    let index = 0;
    const typingInterval = setInterval(() => {
        composer.value += code.value[index]
        index++
        if (index >= code.value.length) {
            clearInterval(typingInterval)
        }
    }, 100)
};

const animateCode = () => {
    const codeOne = ref(`require __DIR__ . '/vendor/autoload.php'; 

$sms = \FutureFast\Tradesk\SMS::config([ 

  'app_key' => process.env.APP_KEY, 

  'app_secret' => process.env.APP_SECRET

]);

$result = $sms->to('254712345678')->message('hello')->send();`);
    let index = 0
    const typingInterval = setInterval(() => {
        codeBlock.value += codeOne.value[index]
        index++
        if (index >= codeOne.value.length) {
            clearInterval(typingInterval)
        }
    }, 100)
};
animateComposer()
setTimeout(() => {
    animateCode();
}, 4000)
setTimeout(() => {
    animateConfigFile();
}, 4000);

setTimeout(() => {
    animateEnvFile();
}, 9000);

setTimeout(() => {
    animateCodeSMSController()
}, 20000)
animateComposerLaravel();



const lang = ref("php");
const language = ref('php')

</script>
<template>
    <main class="min-h-screen bg-white">
        <section class="w-full flex flex-col p-5">
            <TabsWrapper>
                <Tab title="PHP" :isActive="activeTab === 'PHP'" @click="clickTab('PHP')">
                    <template v-slot:icon>
                        <Icon icon="fontisto:php" class="text-xl text-[#6181B6] mr-2" />
                    </template>
                </Tab>
                <Tab title="Laravel" :isActive="activeTab === 'Laravel'" @click="clickTab('Laravel')">
                    <template v-slot:icon>
                        <Icon icon="logos:laravel" class="text-xl mr-2" />
                    </template>
                </Tab>
                <Tab title="NodeJS" :isActive="activeTab === 'NodeJS'" @click="clickTab('NodeJS')">
                    <template v-slot:icon>
                        <Icon icon="logos:nodejs-icon" class="text-xl mr-2" />
                    </template>
                </Tab>
            </TabsWrapper>
            <TabsContent>
                <div v-if="activeTab === 'PHP'">
                    <div class="space-y-3">
                        <h1>Install the SDK with composer</h1>
                        <PrismCodeTab :code="composer" :lang="lang" />
                        <h1>Import the SDK where you want to send bulk sms</h1>
                        <PrismCodeTab :code=codeBlock :lang="language" />
                    </div>
                </div>
                <div v-if="activeTab === 'Laravel'">
                    <div class="space-y-3">
                        <h1>Install the SDK with composer</h1>
                        <PrismCodeTab :code="composerLaravel" :lang="lang" />
                        <h1>Publish the configuration file</h1>
                        <PrismCodeTab :code="configFile" :lang="language" />
                        <h1>Add to your <span class="text-[#3414BC]">.env</span> file the following: </h1>
                        <PrismCodeTab :code=envFile :lang="language" />
                        <h1>Import SMS in your controller to send sms</h1>
                        <PrismCodeTab :code=codeSMSController :lang="language" />
                    </div>
                </div>
                <div v-if="activeTab === 'NodeJS'">
                    <div class="space-y-2 grid-layout">
                        <Icon icon="logos:nodejs-icon" class="w-20 h-20" />
                        <div class="w-52 h-10 rounded-md grid-layout bg-green-500/30">
                            NodeJS SDK coming soon
                        </div>
                    </div>
                </div>
            </TabsContent>
        </section>
    </main>
</template>

