import { Yeseva_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "./navigation";

const style = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const Footer = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <footer className="hidden flex-col items-center justify-center gap-6 rounded-t-2xl border-t-4 border-accent-base bg-gray-200 p-12 dark:rounded-none dark:border-0 dark:bg-gray-800 md:flex">
      <section className="flex w-full flex-col gap-3 lg:max-w-5xl">
        <h3
          className={`uppercase ${style.className} text-center text-gray-50 dark:text-gray-300 lg:text-xl`}
        >
          Contato
        </h3>
        <div className="flex">

        <a href="mailto:jeferson@vwosolucoes.com" className="flex w-full justify-center items-center gap-2 group">
          <svg
            width="42"
            height="33"
            viewBox="0 0 42 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.3846 0.00390625H1.61538C1.18696 0.00390625 0.776078 0.172478 0.473135 0.472536C0.170192 0.772594 0 1.17956 0 1.60391V28.8039C0 29.6526 0.340383 30.4665 0.94627 31.0666C1.55216 31.6668 2.37392 32.0039 3.23077 32.0039H38.7692C39.6261 32.0039 40.4478 31.6668 41.0537 31.0666C41.6596 30.4665 42 29.6526 42 28.8039V1.60391C42 1.17956 41.8298 0.772594 41.5269 0.472536C41.2239 0.172478 40.813 0.00390625 40.3846 0.00390625ZM36.2311 3.20391L21 17.0339L5.76894 3.20391H36.2311ZM38.7692 28.8039H3.23077V5.24191L19.9076 20.3839C20.2056 20.6549 20.5954 20.8052 21 20.8052C21.4046 20.8052 21.7944 20.6549 22.0924 20.3839L38.7692 5.24191V28.8039Z"
              fill="#FFC44C"
            />
          </svg>

          <p className="text-base text-gray-50 dark:text-gray-300 lg:text-xl group-hover:border-b-2 group-hover:border-yellow-300">
            E-Mail
          </p>
        </a>

        <a href="https://wa.me/5511955562955" className="group flex w-full justify-center items-center gap-2">
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.6116 25.5687L27.8417 22.1837C27.5752 22.0509 27.2784 21.9908 26.9813 22.0094C26.6841 22.0279 26.3971 22.1246 26.1492 22.2895L23.0414 24.3628C21.6148 23.5785 20.4408 22.4045 19.6565 20.9778L21.7298 17.87C21.8947 17.6222 21.9913 17.3352 22.0099 17.038C22.0285 16.7409 21.9683 16.4441 21.8356 16.1776L18.4506 9.40769C18.3103 9.12435 18.0934 8.88598 17.8246 8.71959C17.5558 8.55319 17.2457 8.46544 16.9295 8.46626C14.6851 8.46626 12.5327 9.35782 10.9457 10.9448C9.35872 12.5318 8.46715 14.6843 8.46715 16.9286C8.47275 21.8645 10.436 26.5966 13.9262 30.0868C17.4164 33.5769 22.1485 35.5402 27.0843 35.5458C28.1956 35.5458 29.296 35.3269 30.3227 34.9016C31.3494 34.4763 32.2823 33.853 33.0681 33.0672C33.8539 32.2814 34.4772 31.3485 34.9025 30.3218C35.3278 29.2951 35.5467 28.1947 35.5467 27.0834C35.5469 26.769 35.4595 26.4607 35.2944 26.1932C35.1292 25.9256 34.8928 25.7094 34.6116 25.5687ZM27.0843 32.1608C23.0459 32.1564 19.1741 30.5501 16.3185 27.6945C13.4628 24.8388 11.8566 20.9671 11.8521 16.9286C11.8518 15.7547 12.2582 14.617 13.0023 13.709C13.7463 12.801 14.782 12.1789 15.9331 11.9485L18.3618 16.8144L16.2948 19.8904C16.1404 20.1221 16.0455 20.3883 16.0185 20.6655C15.9916 20.9426 16.0334 21.2221 16.1404 21.4792C17.3513 24.3572 19.6409 26.6468 22.5189 27.8577C22.7768 27.9694 23.0584 28.0151 23.3384 27.9908C23.6183 27.9664 23.8878 27.8727 24.1225 27.7181L27.2134 25.6575L32.0792 28.0862C31.8471 29.2386 31.2222 30.2748 30.3113 31.0178C29.4004 31.7609 28.2599 32.1649 27.0843 32.1608ZM22.0069 0.00390677C18.2083 0.00307787 14.4742 0.985725 11.168 2.8562C7.86186 4.72668 5.09628 7.42127 3.14047 10.6777C1.18466 13.9341 0.105254 17.6414 0.00731558 21.4387C-0.0906227 25.2361 0.796243 28.9941 2.58159 32.347L0.180396 39.5506C-0.0185015 40.147 -0.0473663 40.787 0.0970374 41.3989C0.241441 42.0108 0.553407 42.5704 0.997968 43.015C1.44253 43.4595 2.00212 43.7715 2.61401 43.9159C3.22591 44.0603 3.86593 44.0314 4.46235 43.8325L11.6659 41.4313C14.6167 43.0008 17.8862 43.8774 21.2263 43.9946C24.5664 44.1118 27.8894 43.4665 30.9429 42.1078C33.9964 40.749 36.7002 38.7124 38.8491 36.1527C40.998 33.593 42.5356 30.5773 43.345 27.3346C44.1544 24.0919 44.2145 20.7075 43.5206 17.4381C42.8267 14.1688 41.3972 11.1005 39.3404 8.46608C37.2837 5.83171 34.6538 3.70052 31.6504 2.23427C28.647 0.768032 25.3491 0.00527764 22.0069 0.00390677ZM22.0069 40.6232C18.7341 40.6254 15.5186 39.7635 12.6856 38.1247C12.4782 38.0044 12.2476 37.9296 12.0091 37.9051C11.7705 37.8807 11.5295 37.9072 11.302 37.9829L3.38974 40.6232L6.02788 32.7109C6.10393 32.4835 6.1308 32.2426 6.10673 32.0041C6.08266 31.7656 6.00819 31.5349 5.88825 31.3273C3.83607 27.7793 3.01213 23.6532 3.54424 19.5891C4.07636 15.525 5.93478 11.7501 8.83122 8.85001C11.7277 5.94991 15.5002 4.08672 19.5636 3.54947C23.627 3.01222 27.7542 3.83095 31.3048 5.87865C34.8554 7.92635 37.631 11.0885 39.201 14.8747C40.7711 18.6608 41.0478 22.8593 39.9882 26.8187C38.9286 30.7782 36.592 34.2773 33.3408 36.7733C30.0897 39.2692 26.1057 40.6225 22.0069 40.6232Z"
              fill="#FFC44C"
            />
          </svg>

          <p className="text-base text-gray-50 dark:text-gray-300 lg:text-xl group-hover:border-b-2 group-hover:border-yellow-300">
           Celular 
          </p>
        </a>

        <a href="https://www.linkedin.com/in/engenheiroeletrico-jeferson/" className="group flex w-full justify-center items-center gap-2">
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.6154 0.0078125H3.38462C2.48696 0.0078125 1.62607 0.364405 0.991331 0.999143C0.356592 1.63388 0 2.49477 0 3.39243V40.6232C0 41.5209 0.356592 42.3817 0.991331 43.0165C1.62607 43.6512 2.48696 44.0078 3.38462 44.0078H40.6154C41.513 44.0078 42.3739 43.6512 43.0087 43.0165C43.6434 42.3817 44 41.5209 44 40.6232V3.39243C44 2.49477 43.6434 1.63388 43.0087 0.999143C42.3739 0.364405 41.513 0.0078125 40.6154 0.0078125ZM40.6154 40.6232H3.38462V3.39243H40.6154V40.6232ZM15.2308 18.6232V32.1617C15.2308 32.6105 15.0525 33.0409 14.7351 33.3583C14.4177 33.6757 13.9873 33.854 13.5385 33.854C13.0896 33.854 12.6592 33.6757 12.3418 33.3583C12.0245 33.0409 11.8462 32.6105 11.8462 32.1617V18.6232C11.8462 18.1744 12.0245 17.7439 12.3418 17.4266C12.6592 17.1092 13.0896 16.9309 13.5385 16.9309C13.9873 16.9309 14.4177 17.1092 14.7351 17.4266C15.0525 17.7439 15.2308 18.1744 15.2308 18.6232ZM33.8462 24.5463V32.1617C33.8462 32.6105 33.6679 33.0409 33.3505 33.3583C33.0331 33.6757 32.6027 33.854 32.1538 33.854C31.705 33.854 31.2746 33.6757 30.9572 33.3583C30.6398 33.0409 30.4615 32.6105 30.4615 32.1617V24.5463C30.4615 23.4242 30.0158 22.3481 29.2224 21.5547C28.429 20.7612 27.3528 20.3155 26.2308 20.3155C25.1087 20.3155 24.0326 20.7612 23.2392 21.5547C22.4457 22.3481 22 23.4242 22 24.5463V32.1617C22 32.6105 21.8217 33.0409 21.5043 33.3583C21.187 33.6757 20.7565 33.854 20.3077 33.854C19.8589 33.854 19.4284 33.6757 19.111 33.3583C18.7937 33.0409 18.6154 32.6105 18.6154 32.1617V18.6232C18.6175 18.2087 18.7717 17.8093 19.0486 17.5009C19.3256 17.1926 19.7062 16.9965 20.1181 16.9501C20.53 16.9037 20.9446 17.01 21.2833 17.249C21.622 17.488 21.8612 17.843 21.9556 18.2467C23.1004 17.47 24.4351 17.0199 25.8165 16.9447C27.1978 16.8694 28.5735 17.1718 29.7959 17.8195C31.0184 18.4671 32.0413 19.4355 32.7549 20.6206C33.4684 21.8058 33.8457 23.1629 33.8462 24.5463ZM16.0769 12.7001C16.0769 13.2022 15.928 13.693 15.6491 14.1104C15.3702 14.5279 14.9737 14.8532 14.5099 15.0454C14.046 15.2375 13.5356 15.2878 13.0432 15.1898C12.5508 15.0919 12.0985 14.8501 11.7435 14.4951C11.3885 14.1401 11.1467 13.6878 11.0488 13.1954C10.9508 12.7029 11.0011 12.1925 11.1932 11.7287C11.3854 11.2648 11.7107 10.8684 12.1282 10.5895C12.5456 10.3105 13.0364 10.1617 13.5385 10.1617C14.2117 10.1617 14.8574 10.4291 15.3334 10.9052C15.8095 11.3812 16.0769 12.0269 16.0769 12.7001Z"
              fill="#FFC44C"
            />
          </svg>

          <p className="text-base text-gray-50 dark:text-gray-300 lg:text-xl group-hover:border-b-2 group-hover:border-yellow-300">
            Linkedin
          </p>
        </a>
        </div>

      </section>

      <section className="flex flex-col items-center gap-3 p-3">
        <Link href="/">
          <Image src="/logo.png" width={140} height={40} alt="Logo" />
        </Link>

        <div className="flex items-center gap-2">
          {navigation.map(({ name, darkModeIcon, lightModeIcon }) => (
            <a href={`#${name}`} key={name}>
              {theme === "dark" ? darkModeIcon : lightModeIcon}
            </a>
          ))}
        </div>
      </section>

      <p className="text-center text-gray-50 dark:text-gray-300">
        © 2023 <a href="https://github.com/AtomicFeasT">Thiago Thalisson</a> E{" "}
        <a href="https://github.com/VitorGouveia">Vitor Gouveia</a>
      </p>

      <Link
        href="/politica-de-privacidade"
        className={`${style.className} text-gray-50 dark:text-gray-300`}
      >
        Política De Privacidade
      </Link>

      <button
        className="flex appearance-none flex-col items-center"
        onClick={() => {
          // @ts-ignore
          document.body.scroll = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <p className="text-gray-50 dark:text-gray-300">Voltar Ao Topo</p>

        {theme === "dark" ? (
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2196_2860)">
              <path
                d="M18 0.132812C14.4647 0.132813 11.0087 1.18116 8.06919 3.14529C5.12966 5.10942 2.83858 7.90112 1.48566 11.1673C0.132745 14.4336 -0.22124 18.0276 0.468471 21.4951C1.15818 24.9625 2.86061 28.1475 5.36047 30.6473C7.86034 33.1472 11.0454 34.8496 14.5128 35.5393C17.9802 36.2291 21.5742 35.8751 24.8405 34.5222C28.1067 33.1692 30.8984 30.8782 32.8625 27.9386C34.8267 24.9991 35.875 21.5432 35.875 18.0078C35.87 13.2686 33.9851 8.72493 30.634 5.37381C27.2829 2.02268 22.7392 0.137817 18 0.132812ZM18 33.1328C15.0086 33.1328 12.0843 32.2457 9.59701 30.5838C7.10971 28.9218 5.17111 26.5596 4.02633 23.7959C2.88155 21.0322 2.58203 17.991 3.16563 15.0571C3.74923 12.1231 5.18975 9.42809 7.30502 7.31282C9.42029 5.19755 12.1153 3.75704 15.0493 3.17344C17.9832 2.58983 21.0244 2.88936 23.7881 4.03413C26.5518 5.17891 28.914 7.11752 30.576 9.60481C32.2379 12.0921 33.125 15.0164 33.125 18.0078C33.1205 22.0178 31.5255 25.8623 28.69 28.6978C25.8545 31.5333 22.01 33.1283 18 33.1328ZM24.4728 15.66C24.6006 15.7878 24.7019 15.9394 24.771 16.1063C24.8402 16.2732 24.8758 16.4521 24.8758 16.6328C24.8758 16.8135 24.8402 16.9924 24.771 17.1593C24.7019 17.3262 24.6006 17.4779 24.4728 17.6056C24.3451 17.7334 24.1934 17.8347 24.0265 17.9039C23.8596 17.973 23.6807 18.0086 23.5 18.0086C23.3193 18.0086 23.1404 17.973 22.9735 17.9039C22.8066 17.8347 22.6549 17.7334 22.5272 17.6056L19.375 14.4517V24.8828C19.375 25.2475 19.2301 25.5972 18.9723 25.8551C18.7144 26.1129 18.3647 26.2578 18 26.2578C17.6353 26.2578 17.2856 26.1129 17.0277 25.8551C16.7699 25.5972 16.625 25.2475 16.625 24.8828V14.4517L13.4728 17.6056C13.2148 17.8636 12.8649 18.0086 12.5 18.0086C12.1351 18.0086 11.7852 17.8636 11.5272 17.6056C11.2692 17.3476 11.1242 16.9977 11.1242 16.6328C11.1242 16.2679 11.2692 15.918 11.5272 15.66L17.0272 10.16C17.1549 10.0322 17.3065 9.93074 17.4735 9.86154C17.6404 9.79235 17.8193 9.75673 18 9.75673C18.1807 9.75673 18.3596 9.79235 18.5266 9.86154C18.6935 9.93074 18.8451 10.0322 18.9728 10.16L24.4728 15.66Z"
                fill="#E2E8F0"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2196_2860"
                x="0.125"
                y="0.132812"
                width="35.75"
                height="36.75"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0.4 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2196_2860"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2196_2860"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        ) : (
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2196_2565)">
              <path
                d="M18 0.128906C14.4647 0.128906 11.0087 1.17726 8.06919 3.14139C5.12966 5.10552 2.83858 7.89721 1.48566 11.1634C0.132745 14.4297 -0.22124 18.0237 0.468471 21.4911C1.15818 24.9586 2.86061 28.1436 5.36047 30.6434C7.86034 33.1433 11.0454 34.8457 14.5128 35.5354C17.9802 36.2252 21.5742 35.8712 24.8405 34.5183C28.1067 33.1653 30.8984 30.8743 32.8625 27.9347C34.8267 24.9952 35.875 21.5392 35.875 18.0039C35.87 13.2647 33.9851 8.72103 30.634 5.3699C27.2829 2.01877 22.7392 0.133911 18 0.128906ZM18 33.1289C15.0086 33.1289 12.0843 32.2418 9.59701 30.5799C7.10971 28.9179 5.17111 26.5557 4.02633 23.792C2.88155 21.0283 2.58203 17.9871 3.16563 15.0532C3.74923 12.1192 5.18975 9.42419 7.30502 7.30892C9.42029 5.19365 12.1153 3.75313 15.0493 3.16953C17.9832 2.58593 21.0244 2.88545 23.7881 4.03023C26.5518 5.175 28.914 7.11361 30.576 9.60091C32.2379 12.0882 33.125 15.0125 33.125 18.0039C33.1205 22.0139 31.5255 25.8584 28.69 28.6939C25.8545 31.5294 22.01 33.1244 18 33.1289ZM24.4728 15.6561C24.6006 15.7838 24.7019 15.9355 24.771 16.1024C24.8402 16.2693 24.8758 16.4482 24.8758 16.6289C24.8758 16.8096 24.8402 16.9885 24.771 17.1554C24.7019 17.3223 24.6006 17.474 24.4728 17.6017C24.3451 17.7295 24.1934 17.8308 24.0265 17.8999C23.8596 17.9691 23.6807 18.0047 23.5 18.0047C23.3193 18.0047 23.1404 17.9691 22.9735 17.8999C22.8066 17.8308 22.6549 17.7295 22.5272 17.6017L19.375 14.4478V24.8789C19.375 25.2436 19.2301 25.5933 18.9723 25.8512C18.7144 26.109 18.3647 26.2539 18 26.2539C17.6353 26.2539 17.2856 26.109 17.0277 25.8512C16.7699 25.5933 16.625 25.2436 16.625 24.8789V14.4478L13.4728 17.6017C13.2148 17.8597 12.8649 18.0047 12.5 18.0047C12.1351 18.0047 11.7852 17.8597 11.5272 17.6017C11.2692 17.3437 11.1242 16.9938 11.1242 16.6289C11.1242 16.264 11.2692 15.9141 11.5272 15.6561L17.0272 10.1561C17.1549 10.0283 17.3065 9.92683 17.4735 9.85764C17.6404 9.78844 17.8193 9.75282 18 9.75282C18.1807 9.75282 18.3596 9.78844 18.5266 9.85764C18.6935 9.92683 18.8451 10.0283 18.9728 10.1561L24.4728 15.6561Z"
                fill="#334155"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2196_2565"
                x="0.125"
                y="0.128906"
                width="35.75"
                height="36.75"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0.4 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2196_2565"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2196_2565"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </button>
    </footer>
  );
};
