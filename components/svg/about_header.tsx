import * as React from "react";
import { SVGProps } from "react";
const AboutHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="fill-cocoa-dark p-2 dark:fill-cream sm:w-[388px]"
    width={388}
    height={60}
    viewBox="0 0 388 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.795 16.333a46.229 46.229 0 0 0 2.08-7.712c.564-2.735 6.668-5.421 9.262-5.421 2.113 0 2.828 1.466 3.593 3.477l16.082 41.045c.482 1.22 1.43 3.28 3.51 5.06.797.708 2.078 1.696 2.078 2.965 0 2.142-1.563 2.653-4.707 2.653-2.162 0-4.107-.198-7.866-.198-3.759 0-5.82.198-8.182.198s-3.476-.906-3.476-2.455c0-2.258 4.706-3.081 4.706-6.69 0-.626-.998-3.592-1.796-5.026-.283-.51-.915-.906-1.713-.906H17.512c-1.03 0-1.796.395-2.278.906-.798 1.187-2.112 4.317-2.112 5.652 0 3.477 4.158 3.988 4.158 6.245 0 1.269-.765 2.258-3.36 2.258-1.713 0-4.623-.198-6.47-.198-1.845 0-3.076.197-4.822.197C.88 58.383 0 57.593 0 56.175c0-2.488 3.226-2.29 5.671-8.535l12.14-31.324-.016.017Zm11.459 19.97c.798 0 .964-.28.964-.708 0-1.186-3.392-11.04-5.305-14.714-.2-.429-.565-.907-.798-.907-.316 0-.566.478-.798.907-1.763 3.476-5.505 13.725-5.505 14.714 0 .428.2.709.915.709H29.27h-.017Zm30.218-23.901c0-2.075-1.43-3.105-2.676-3.67-.798-.48-1.596-.962-1.596-2.075 0-1.793 2.227-2.274 5.552-3.552C65.256 1.395 66.935 0 68.764 0c1.429 0 2.593.714 2.593 2.623 0 2.308-.765 6.541-.765 14.593v4.416c0 1.478.233 1.91.565 1.91.881 0 4.222-6.21 12.167-6.21 9.541 0 15.076 8.252 15.076 19.757 0 14.544-8.46 22.28-18.999 22.28-5.302 0-8.892-2.988-10.804-2.988-1.595 0-2.825.232-3.956 1.112C63.08 58.688 62.081 60 60.851 60s-1.96-.797-1.96-1.992c0-2.159.564-3.62.564-11.755V12.386l.017.017Zm11.336 25.816c0 12.037 3.308 14.66 7.18 14.66 4.073 0 8.012-4.101 8.012-14.062 0-9.962-3.307-13.58-7.58-13.58-3.872 0-7.612 4.067-7.612 12.999v-.017ZM122.345 17.6c11.007 0 20.855 7.85 20.855 21.843 0 13.204-9.219 19.757-20.375 19.757-12.43 0-20.425-8.59-20.425-20.463 0-12.498 8.375-21.137 19.945-21.137Zm-7.663 16.949c0 3.662.595 8.36 2.267 11.94 1.788 3.711 4.602 5.485 7.432 5.485 3.658 0 7.067-2.644 7.067-9.575 0-4.024-1.075-8.983-2.697-12.498-2.02-4.106-4.767-6.142-7.465-6.142-3.46 0-6.588 2.956-6.588 10.806l-.016-.016Zm73.023 12.678c0 1.552.683 3.286 2.431 3.286.833 0 1.282-.28 1.831-.28.433 0 .833.594.833 1.503 0 4.161-3.713 7.332-8.358 7.332-4.645 0-6.593-2.378-7.675-4.442-.166-.314-.433-.826-.965-.826-.234 0-.683.396-1.166.875-1.598 1.354-5.028 4.525-11.221 4.525-9.79 0-13.302-6.457-13.302-14.714 0-5.714.882-12.915.882-14.979 0-2.213-.566-3.336-1.682-4.41-1.282-1.189-2.913-1.502-2.913-3.368 0-1.47 1.082-2.213 3.363-2.461 7.109-.76 9.357-1.668 11.221-1.668 2.031 0 2.564 1.42 2.564 2.692 0 4.64-1.482 9.149-1.482 20.379 0 6.374 1.632 10.701 6.91 10.701 3.795 0 7.159-2.494 7.159-9V30.96c0-3.17-.367-4.558-1.882-5.912-1.082-1.106-2.397-1.552-2.397-3.336 0-1.42.999-2.147 3.113-2.411 5.794-.595 9.756-1.701 11.221-1.701 1.832 0 2.398 1.305 2.398 2.659 0 2.61-.916 4.558-.916 11.329V47.21l.033.017Zm23.63-5.834c0 4.51 1.192 8.607 5.563 8.607 2.185 0 3.692-1.267 4.685-2.09.48-.477.795-.708 1.225-.708.596 0 1.192.428 1.192 1.893 0 .823-.282 1.893-.828 2.962-1.506 3.078-5.446 7.143-12.317 7.143-7.83 0-11.24-5.25-11.24-14.302 0-3.588.513-12.014.513-16.556 0-1.613-.431-2.452-1.755-2.683-2.467-.28-3.973-.675-3.973-2.205 0-1.383.364-2.732 1.871-3.473 2.615-1.3 5.247-2.995 7.151-4.904C206.601 11.802 207.031 8 209.498 8c1.424 0 2.549 1.103 2.549 3.522 0 1.662-.397 7.077-.397 7.422 0 .198.033.313.364.313.795 0 6.87-.362 7.913-.362 1.788 0 2.864.51 2.864 2.683 0 1.415-.794 3.39-1.622 4.312-.232.23-.795.51-1.556.51-.878 0-6.043-.313-7.235-.313-.231 0-.629.082-.678.757-.166 1.613-.365 10.434-.365 14.532v.017Zm76.913-.626c-2.491 6.707-4.718 12.896-5.856 15.305-.957 1.773-2.458 3.128-4.52 3.128-1.022 0-1.946-.97-2.457-2.09-1.072-2.326-9.105-22.767-12.272-30.31-.512-1.205-.825-1.807-1.155-1.807-.33 0-.478.518-.561 1.371-.165 1.439-.511 13.416-.511 15.74 0 4.182.429 7.83 1.072 9.234 1.468 2.894 3.645 2.928 3.645 5.303 0 1.405-.759 2.375-2.853 2.375-2.574 0-4.124-.2-5.543-.2-1.781 0-3.876.2-6.499.2-1.864 0-2.738-.92-2.738-2.325 0-3.011 3.877-2.325 4.668-8.43.825-6.742 1.501-20.642 1.501-26.865 0-2.442-.082-4.45-.198-5.938-.56-6.34-4.387-5.988-4.387-9.066 0-1.372.676-2.375 2.771-2.375 1.418 0 4.668.2 6.614.2 4.586 0 5.905.235 7.291 1.121 1.468.92 2.804 3.095 3.563 4.5 1.221 2.291 8.907 20.875 11.249 26.412.165.435.363.72.677.72.198 0 .429-.118.709-.686.676-1.773 7.604-19.789 10.656-26.613 1.022-2.208 2.062-3.58 3.249-4.383 1.303-.803 3.398-1.087 7.489-1.087 1.22 0 3.926-.201 5.344-.201 1.947 0 2.656 1.037 2.656 2.409 0 2.977-3.596 2.81-4.355 8.915-.198 1.64-.231 4.132-.231 5.704 0 8.515.907 22.047 1.617 27.065.824 6.34 4.717 5.587 4.717 8.598 0 1.405-.874 2.325-2.853 2.325-2.541 0-6.334-.2-8.083-.2-2.688 0-5.344.2-7.917.2-2.013 0-3.134-.836-3.134-2.208 0-2.693 3.645-2.576 4.47-7.26.115-.686.165-1.806.165-3.211 0-3.613-.314-12.445-.875-19.555-.115-1.003-.395-1.371-.511-1.371-.709 0-2.54 4.332-6.614 15.372v-.017Zm42.912.166c-.771.033-1.039.197-1.039.755 0 2.918 2.899 8.297 10.288 8.297 5.714 0 9.132-2.722 11.176-5.313.52-.508 1.123-.87 1.609-.87.72 0 1.206.706 1.206 2.247 0 5.15-6.2 13.151-17.61 13.151-12.383 0-19.99-8.231-19.99-19.873 0-11.643 8.411-21.727 21.079-21.727 11.025 0 15.851 7.953 15.851 14.25 0 2.672-1.374 4.213-3.418 5.28-4.625 2.557-14.193 3.541-19.135 3.82l-.017-.017Zm5.546-17.315c-4.792 0-8.076 4.755-8.076 9.641 0 1.46.486 2.329 1.575 2.329 2.53 0 9.048-1.066 11.544-3.23.687-.623 1.039-1.345 1.039-2.329 0-3.656-2.58-6.411-6.065-6.411h-.017Z" />
    <mask
      id="a"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={361}
      y={34}
      width={28}
      height={26}
    >
      <path d="M388 34.825h-26.53v24.85H388v-24.85Z" fill="#fff" />
    </mask>
    <g mask="url(#a)" fill="#F0862A">
      <path d="M375.881 57.91c1.023.822 2.096 1.434 3.349 1.019.481-.16 1.431-.523 1.912-.683 1.441-.48 1.453-.757 1.562-.825.168-.105.867-1.158 1.033-1.409.254-.16 1.332-.844 1.439-1.011.07-.107.352-.118.843-1.529.164-.47.534-1.4.698-1.87.426-1.23-.198-2.28-1.042-3.28-.008-.01-.026-.026-.034-.034-.614-.601-1.242-.847-1.702-1.045-.958-.416-2.971-1.022-3.997-1.226-.561-.112-1.916-.366-2.484-.3-2.768.318-3.127.527-3.703.527 0 .604-.212.915-.539 3.625-.066.556.193 1.881.307 2.43.209 1.006.827 2.976 1.252 3.914.204.45.454 1.061 1.068 1.665l.035.034.003-.003Z" />
      <path d="M362.647 48.32c-.84 1-1.465 2.05-1.041 3.279.164.47.534 1.4.698 1.87.491 1.412.775 1.422.843 1.53.107.164 1.183.848 1.439 1.01.162.249.862 1.305 1.033 1.409.109.068.121.345 1.562.826.481.16 1.431.522 1.912.682 1.253.418 2.328-.193 3.349-1.02.012-.007.026-.025.035-.033.613-.601.865-1.215 1.068-1.665.424-.938 1.044-2.908 1.251-3.914.115-.549.375-1.874.307-2.43-.325-2.71-.539-3.063-.539-3.625-.616 0-.933-.209-3.702-.528-.569-.065-1.922.188-2.482.3-1.028.205-3.041.81-4 1.226-.459.199-1.083.444-1.699 1.045l-.035.035.001.002Z" />
      <path d="M372.446 35.98c-1.023-.823-2.096-1.435-3.351-1.02-.48.16-1.431.523-1.911.683-1.442.48-1.452.758-1.562.825-.169.105-.867 1.158-1.033 1.409-.253.16-1.333.844-1.439 1.011-.069.107-.351.118-.844 1.529-.162.47-.534 1.4-.696 1.871-.428 1.228.197 2.279 1.041 3.28.008.01.027.026.035.033.613.602 1.242.847 1.699 1.046.959.415 2.972 1.021 4 1.225.56.113 1.913.366 2.482.3 2.769-.318 3.129-.527 3.703-.527 0-.604.214-.915.54-3.625.067-.556-.192-1.881-.307-2.43-.208-1.006-.829-2.976-1.253-3.914-.202-.45-.453-1.061-1.068-1.665l-.033-.034-.003.003Z" />
      <path d="M385.677 45.567c.843-1 1.466-2.051 1.042-3.28-.163-.47-.534-1.4-.697-1.87-.491-1.412-.774-1.422-.844-1.53-.106-.164-1.182-.849-1.437-1.01-.165-.249-.863-1.304-1.033-1.409-.11-.068-.122-.345-1.562-.826-.481-.16-1.431-.522-1.912-.682-1.255-.418-2.328.194-3.351 1.02a.267.267 0 0 0-.033.033c-.616.601-.866 1.215-1.068 1.665-.425.938-1.045 2.908-1.252 3.915-.116.548-.375 1.873-.309 2.43.327 2.71.541 3.062.541 3.624.615 0 .933.21 3.703.528.567.065 1.921-.188 2.482-.3 1.028-.204 3.041-.81 3.999-1.226.458-.199 1.083-.444 1.7-1.045.008-.008.026-.027.035-.034l-.004-.003Z" />
    </g>
  </svg>
);
export default AboutHeader;
