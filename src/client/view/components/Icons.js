import { h } from 'hyperapp' //eslint-disable-line

const Svg = (props, children) =>
  <svg
    id={props.id || ''}
    className={props.className || ''}
    fill={props.fill || '#000'}
    height={props.height || 24}
    width={props.width || 24}
    viewBox={props.viewBox || '0 0 24 24'}
    {...props}>
    {children}
  </svg>
//
// export const Document = props =>
//   <Svg {...props}>
//     <path d='M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' />
//   </Svg>

export const AngleDown = props =>
  <Svg {...props}>
    <path d='M7 10l5 5 5-5z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const Logo = props =>
  <Svg {...props}>
    <g><path d='M13.618 6.166c.237-.329.382-.729.382-1.166 0-1.102-.897-2-2-2-1.104 0-2 .898-2 2 0 .437.144.837.381 1.166-1.854.383-3.472 1.41-4.616 2.834h12.47c-1.145-1.424-2.763-2.451-4.617-2.834zm-1.618-.166c-.552 0-1-.447-1-1 0-.551.448-1 1-1 .551 0 1 .449 1 1 0 .553-.449 1-1 1zM20.5 9.5c-.751 0-2 .5-2 .5h-13.418c-.598 1.029-.969 2.201-1.055 3.453-1.153-.222-2.027-1.236-2.027-2.453v-1.5c0-.826-.673-1.5-1.5-1.5-.276 0-.5.225-.5.5 0 .276.224.5.5.5.275 0 .5.225.5.5v1.5c0 1.767 1.316 3.228 3.019 3.463.09 1.572.633 3.063 1.593 4.338.094.126.242.199.399.199h11.979c.157 0 .306-.073.399-.199.558-.741.971-1.556 1.241-2.415.283.073.573.114.869.114 1.93 0 3.5-1.568 3.5-3.5.001-1.93-1.569-3.5-3.499-3.5zm0 6c-.215 0-.424-.035-.629-.09.083-.462.129-.932.129-1.41 0-1.139-.244-2.222-.675-3.203.359-.194.759-.297 1.175-.297 1.378 0 2.5 1.122 2.5 2.5 0 1.379-1.122 2.5-2.5 2.5z' /></g>
  </Svg>

// export const Tag = props =>
//   <Svg {...props}>
//     <path d='M0 0h24v24H0z' fill='none' />
//     <path d='M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z' />
//   </Svg>

export const User = props =>
  <Svg {...props}>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>
