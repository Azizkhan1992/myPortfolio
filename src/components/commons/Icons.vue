<template>
    <div class="icon"
    :id="id"
    >
    <svg
      :id="id"
      v-if="this.size == 'sm'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == 'middle'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == '32'"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == 'large'"
      width="36"
      height="36"
      viewBox="0 0 36 36 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == '48'"
      width="48"
      height="48"
      viewBox="0 0 48 48 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    </div>
</template>
<script>
export default{
    name: 'svg-icon',
    props: {
    icon: String,
    size: String,
    color: {
      type: String,
      default: "none",
    },
    stroke: {
        type: String,
        default: '#A4ABBD'
    },
    id: String,
  },
  data(){
    return{
        icons: {
            home: `<path :stroke="${this.stroke}" stroke-width="1" :fill="${this.color}" d="M1.656 17.756 16 5.324l14.344 12.432a1.001 1.001 0 0 0 1.312-1.512l-15-13a1 1 0 0 0-1.31 0L10 7.876V6a2 2 0 0 0-4 0v5.342L.344 16.244a1.003 1.003 0 0 0-.1 1.412c.364.416.994.462 1.412.1zM12 22h8v10h6a2 2 0 0 0 2-2v-9.802c0-.6-.268-1.166-.732-1.546l-10-8.198a1.996 1.996 0 0 0-2.536 0l-10 8.198A1.993 1.993 0 0 0 4 20.198V30a2 2 0 0 0 2 2h6V22z"/>`,
            human: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z"/>`,
            paper: `<path :stroke="${this.stroke}" stroke-width="0.5" :fill="${this.color}" d="M25.29999,31.5c0.83002,0,1.5-0.67004,1.5-1.5V8.64001c0-0.19-0.03998-0.38-0.10999-0.55005c-0.07001-0.19-0.19-0.37-0.33002-0.51001L19.71997,0.94C19.44,0.65997,19.06,0.5,18.65997,0.5H6.70001c-0.83002,0-1.5,0.66998-1.5,1.5v28c0,0.82996,0.66998,1.5,1.5,1.5H25.29999z M8.20001,3.5h8.95996v5.14001c0,0.82996,0.67004,1.5,1.5,1.5h5.14001V28.5H8.20001V3.5z"/><path :stroke="${this.stroke}" stroke-width="0.5" d="M20.05371 11.6875h-8.10742c-.82861 0-1.5.67139-1.5 1.5s.67139 1.5 1.5 1.5h8.10742c.82861 0 1.5-.67139 1.5-1.5S20.88232 11.6875 20.05371 11.6875zM20.05371 17.3125h-8.10742c-.82861 0-1.5.67139-1.5 1.5s.67139 1.5 1.5 1.5h8.10742c.82861 0 1.5-.67139 1.5-1.5S20.88232 17.3125 20.05371 17.3125zM20.05371 22.9375h-8.10742c-.82861 0-1.5.67139-1.5 1.5s.67139 1.5 1.5 1.5h8.10742c.82861 0 1.5-.67139 1.5-1.5S20.88232 22.9375 20.05371 22.9375z"/>`,
            list: `<path fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M21.1294,4.196h2.9036c1.2132,0,2.2075,0.9944,2.2075,2.2075v21.618c0,1.2132-0.9944,2.2075-2.2075,2.2075
		H8.0632c-1.2132,0-2.2075-0.9944-2.2075-2.2075V6.4035c0-1.2132,0.9944-2.2075,2.2075-2.2075h2.9036"/><path fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M19.4086,6.5583h-6.721c-0.9488,0-1.718-0.7692-1.718-1.718V3.553c0-0.9488,0.7692-1.718,1.718-1.718h6.721
		c0.9488,0,1.718,0.7692,1.718,1.718v1.2874C21.1266,5.7892,20.3574,6.5583,19.4086,6.5583z"/><line x1="15.071" x2="22.602" y1="12.684" y2="12.684" fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="9.495" x2="11.776" y1="12.684" y2="12.684" fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="15.071" x2="22.602" y1="17.693" y2="17.693" fill="none" stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="9.495" x2="11.776" y1="17.693" y2="17.693" fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="15.071" x2="22.602" y1="22.702" y2="22.702" fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line x1="9.495" x2="11.776" y1="22.702" y2="22.702" fill="none" :stroke="${this.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>`,
    telegram: `
          <path d="M21 4.60223L17.9946 20.2923C17.9946 20.2923 17.5741 21.3801 16.4189 20.8584L9.48458 15.3526L9.45242 15.3364C10.3891 14.4654 17.6524 7.70266 17.9698 7.39612C18.4613 6.92136 18.1562 6.63873 17.5856 6.99736L6.85679 14.053L2.71764 12.6108C2.71764 12.6108 2.06626 12.3708 2.00359 11.8491C1.9401 11.3265 2.73908 11.0439 2.73908 11.0439L19.6131 4.18895C19.6131 4.18895 21 3.55793 21 4.60223V4.60223Z" :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1"/>
        `,
        rightArr: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" fill-rule="evenodd" d="M8.306 18.694c.408.408 1.07.408 1.478 0l5.913-5.9A1.04 1.04 0 0 0 16 11.97a1.04 1.04 0 0 0-.306-.761l-5.91-5.904a1.046 1.046 0 0 0-1.478 0 1.043 1.043 0 0 0 0 1.476l5.227 5.22-5.227 5.217a1.042 1.042 0 0 0 0 1.475Z" clip-rule="evenodd"/>`,
        message: `<path :stroke="${this.stroke}" strooke-width="1" d="M27 5H5a3 3 0 0 0-3 3v.4l13.64 7.33a1 1 0 0 0 .78 0L30 8.4V8a3 3 0 0 0-3-3zm2.68 20.32A3 3 0 0 0 30 24V10.67l-9.1 4.89zM2 10.67V24a3 3 0 0 0 .32 1.32l8.78-9.76zm15.31 6.82a3.16 3.16 0 0 1-1.33.3 3 3 0 0 1-1.24-.27l-1.83-1-9.15 10.2A3 3 0 0 0 5 27h22a3 3 0 0 0 1.25-.28l-9.17-10.18z" data-name="Message"/>`,
        openList: `<path :stroke="${this.stroke}" :fill="${this.color}" stroke-width="1" d="M7 16h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-6h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0 12h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z"/>`,
        close: `<path :stroke="${this.stroke}" stroke-width="1" d="m4 8 4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"/>`,
        mHome: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M18 12h1.925c.968 0 1.371-1.24.588-1.809l-7.925-5.763a1 1 0 0 0-1.176 0L3.487 10.19c-.783.57-.38 1.809.588 1.809H6v7a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-7Z"/>`,
        mHuman: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M8 2C6.348 2 5 3.348 5 5s1.348 3 3 3 3-1.348 3-3-1.348-3-3-3zm0 .857c1.189 0 2.143.954 2.143 2.143A2.138 2.138 0 0 1 8 7.145 2.138 2.138 0 0 1 5.857 5c0-1.188.954-2.143 2.143-2.143zM8 9c-3.828 0-7 2.636-7 6h1c0-2.73 2.626-5 6-5s6 2.27 6 5h1c0-3.364-3.172-6-7-6z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"/>`,
        mPaper: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M19 18.9V6.4l.7-.7c.5-.5.7-1.1.7-1.7s-.3-1.3-.7-1.7c-.9-.9-2.5-.9-3.4 0l-.7.7H7.2C5.4 3 4 4.4 4 6.1v12.8C4 20.6 5.4 22 7.2 22h8.7c1.7 0 3.1-1.4 3.1-3.1zm-.7-15.2c.1.1.1.2.1.3 0 .1 0 .2-.1.2-.1-.2-.3-.4-.5-.5.1-.1.4-.1.5 0zM17 18.9c0 .6-.5 1.1-1.2 1.1H7.2c-.7 0-1.2-.5-1.2-1.1V6.1C6 5.5 6.5 5 7.2 5h6.4l-1.3 1.3c-.5.5-.7 1.1-.7 1.7s.3 1.3.7 1.7c.5.5 1.1.7 1.7.7s1.2-.2 1.7-.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0c-.2.2-.4.2-.6 0-.1-.1-.1-.2-.1-.3s0-.2.1-.3l2.6-2.6c.4.2.7.6.7 1v12.8z"/><path d="M9 14h2c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm5 2H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1z"/>`,
        mList: `<path :stroke="${this.stroke}" stroke-width="1" :fill="${this.color}" d="M20 18V7c0-1.9-1.3-3.4-3-3.9V3c0-.6-.4-1-1-1s-1 .4-1 1h-2c0-.6-.4-1-1-1s-1 .4-1 1H9c0-.6-.4-1-1-1s-1 .4-1 1v.1c-1.7.5-3 2-3 3.9v11c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4zm-2 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V7c0-.8.4-1.4 1.1-1.7.1.4.4.7.9.7.6 0 1-.4 1-1h2c0 .6.4 1 1 1s1-.4 1-1h2c0 .6.4 1 1 1 .5 0 .8-.3.9-.7.7.3 1.1.9 1.1 1.7v11z"/><path d="M11 14H9c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm3-4H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1z"/>`,
        mMessage: `<path :stroke="${this.stroke}" stroke-width="1" :fill="${this.color}" d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/>`
        }
    }
  },
    computed: {
    chosenIcon() {
      return this.icons[this.icon];
    },
  },
}
</script>