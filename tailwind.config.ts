import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        placeholder: '#9ca3af',
        // TIP: DEFAULT is 09
        primary: {
          '12': '#255FFF',
          '11': '#008FC9',
          '10': '#00A3E6',
          DEFAULT: '#02B5FF',
          '01': '#E6F8FF',
          '00': '#F5F7FC',
          '001': '#F4FCFF',
          '002': '#E3F4FF'
        },
        secondary: {
          '17': '#191919',
          '11': '#696969',
          '10': '#787878',
          DEFAULT: '#858585',
          '08': '#919191',
          '06': '#ADADAD',
          '03': '#D6D6D6',
          '02': '#F2F2F2',
          '002':'#FAFAFA',
          '01': '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFCC02',
          '01': '#FFFAE8',
          '00': '#FFFAEB'
        },
        error: {
          DEFAULT: '#FF001E',
          '01': '#FFEDEF',
        },
        warning: {
          DEFAULT: '#FF8A00',
          '01': '#FFF6ED'
        },
        success: {
          '10': '#00A600',
          DEFAULT: '#00C400',
          '01': '#E8FFE8',
          '03':'#BBFFBB'
        },
      },
    },
  },
  plugins: [],
};
export default config;
