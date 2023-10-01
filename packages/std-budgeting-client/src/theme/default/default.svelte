<script lang="ts"/>

<slot><!-- Content goes here --></slot>

<style lang="scss">
  :root {
    --theme--color--white: #fff;
    --theme--color--black: #000;
    --theme--color--gray-100: #f8f9fa;
    --theme--color--gray-200: #e9ecef;
    --theme--color--gray-300: #dee2e6;
    --theme--color--gray-400: #ced4da;
    --theme--color--gray-500: #adb5bd;
    --theme--color--gray-600: #6c757d;
    --theme--color--gray-700: #495057;
    --theme--color--gray-800: #343a40;
    --theme--color--gray-900: #212529;

    --theme--color--blue-100: #e7f5ff;
    --theme--color--blue-200: #d0ebff;
    --theme--color--blue-300: #a5d8ff;
    --theme--color--blue-400: #74c0fc;
    --theme--color--blue-500: #4dabf7;
    --theme--color--blue-600: #339af0;
    --theme--color--blue-700: #228be6;
    --theme--color--blue-800: #1c7ed6;
    --theme--color--blue-900: #1971c2;

    --theme--color--indigo-100: #edf2ff;
    --theme--color--indigo-200: #dbe4ff;
    --theme--color--indigo-300: #bac8ff;
    --theme--color--indigo-400: #91a7ff;
    --theme--color--indigo-500: #748ffc;
    --theme--color--indigo-600: #5c7cfa;
    --theme--color--indigo-700: #4c6ef5;
    --theme--color--indigo-800: #4263eb;
    --theme--color--indigo-900: #3b5bdb;

    --theme--color--purple-100: #f3e8ff;
    --theme--color--purple-200: #e9d5ff;
    --theme--color--purple-300: #d8b4fe;
    --theme--color--purple-400: #c084fc;
    --theme--color--purple-500: #a855f7;
    --theme--color--purple-600: #9333ea;
    --theme--color--purple-700: #7e22ce;
    --theme--color--purple-800: #6b21a8;
    --theme--color--purple-900: #581c87;

    --theme--color--pink-100: #ffe3eb;
    --theme--color--pink-200: #ffc9e0;
    --theme--color--pink-300: #ffa8d5;
    --theme--color--pink-400: #f783ac;
    --theme--color--pink-500: #f06595;
    --theme--color--pink-600: #e64980;
    --theme--color--pink-700: #d6336c;
    --theme--color--pink-800: #c2255c;
    --theme--color--pink-900: #a61e4d;

    --theme--color--red-100: #ffe3e3;
    --theme--color--red-200: #ffc9c9;
    --theme--color--red-300: #ffa8a8;
    --theme--color--red-400: #ff8787;
    --theme--color--red-500: #ff6b6b;
    --theme--color--red-600: #fa5252;
    --theme--color--red-700: #f03e3e;
    --theme--color--red-800: #e03131;
    --theme--color--red-900: #c92a2a;

    --theme--color--orange-100: #fff4e6;
    --theme--color--orange-200: #ffe8cc;
    --theme--color--orange-300: #ffd8a8;
    --theme--color--orange-400: #ffc078;
    --theme--color--orange-500: #ffa94d;
    --theme--color--orange-600: #ff922b;
    --theme--color--orange-700: #fd7e14;
    --theme--color--orange-800: #f76707;
    --theme--color--orange-900: #e8590c;

    --theme--color--yellow-100: #fff9db;
    --theme--color--yellow-200: #fff3bf;
    --theme--color--yellow-300: #ffec99;
    --theme--color--yellow-400: #ffe066;
    --theme--color--yellow-500: #ffd43b;
    --theme--color--yellow-600: #fcc419;
    --theme--color--yellow-700: #fab005;
    --theme--color--yellow-800: #f59f00;
    --theme--color--yellow-900: #f08c00;

    --theme--color--green-100: #ebfbee;
    --theme--color--green-200: #d3f9d8;
    --theme--color--green-300: #b2f2bb;
    --theme--color--green-400: #8ce99a;
    --theme--color--green-500: #69db7c;
    --theme--color--green-600: #51cf66;
    --theme--color--green-700: #40c057;
    --theme--color--green-800: #37b24d;
    --theme--color--green-900: #2f9e44;

    --theme--color--teal-100: #e6fcf5;
    --theme--color--teal-200: #c3fae8;
    --theme--color--teal-300: #96f2d7;
    --theme--color--teal-400: #63e6be;
    --theme--color--teal-500: #38d9a9;
    --theme--color--teal-600: #20c997;
    --theme--color--teal-700: #12b886;
    --theme--color--teal-800: #0ca678;
    --theme--color--teal-900: #099268;

    --theme--color--cyan-100: #e3fafc;
    --theme--color--cyan-200: #c5f6fa;
    --theme--color--cyan-300: #99e9f2;
    --theme--color--cyan-400: #66d9e8;
    --theme--color--cyan-500: #3bc9db;
    --theme--color--cyan-600: #22b8cf;
    --theme--color--cyan-700: #15aabf;
    --theme--color--cyan-800: #1098ad;
    --theme--color--cyan-900: #0c8599;

    --theme--color--primary: var(--theme--color--blue-500);
    --theme--color--secondary: var(--theme--color--gray-600);
    --theme--color--success: var(--theme--color--green-500);
    --theme--color--info: var(--theme--color--cyan-500);
    --theme--color--warning: var(--theme--color--yellow-500);
    --theme--color--danger: var(--theme--color--red-500);
    --theme--color--light: var(--theme--color--gray-100);
    --theme--color--dark: var(--theme--color--gray-800);

    --theme--color--white-100: rgba(255, 255, 255, 0.1);
    --theme--color--white-200: rgba(255, 255, 255, 0.2);
    --theme--color--white-300: rgba(255, 255, 255, 0.3);
    --theme--color--white-400: rgba(255, 255, 255, 0.4);
    --theme--color--white-500: rgba(255, 255, 255, 0.5);
    --theme--color--white-600: rgba(255, 255, 255, 0.6);
    --theme--color--white-700: rgba(255, 255, 255, 0.7);
    --theme--color--white-800: rgba(255, 255, 255, 0.8);
    --theme--color--white-900: rgba(255, 255, 255, 0.9);

    --theme--color--black-100: rgba(0, 0, 0, 0.1);
    --theme--color--black-200: rgba(0, 0, 0, 0.2);
    --theme--color--black-300: rgba(0, 0, 0, 0.3);
    --theme--color--black-400: rgba(0, 0, 0, 0.4);
    --theme--color--black-500: rgba(0, 0, 0, 0.5);
    --theme--color--black-600: rgba(0, 0, 0, 0.6);
    --theme--color--black-700: rgba(0, 0, 0, 0.7);
    --theme--color--black-800: rgba(0, 0, 0, 0.8);
    --theme--color--black-900: rgba(0, 0, 0, 0.9);

    --theme--color--transparent: transparent;
  }
</style>
