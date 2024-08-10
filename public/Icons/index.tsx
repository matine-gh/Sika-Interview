import {IconsProps} from "./Icons.interface";

export default function Icons(props: IconsProps) {
    switch (props.name) {
        case 'more':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={props.width || '24'} height={props.height || '24'} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            )
        case 'step-not-start':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.0835 13.1174C7.0835 12.2979 7.67402 11.5999 8.47655 11.4707C9.4859 11.3083 10.5144 11.3083 11.5238 11.4707C12.3263 11.5999 12.9168 12.2979 12.9168 13.1174V13.2989C12.9168 13.7781 12.5315 14.1667 12.0563 14.1667H7.94407C7.46879 14.1667 7.0835 13.7781 7.0835 13.2989V13.1174Z"
                        stroke="#787878" strokeWidth="1.08333"/>
                    <path
                        d="M11.7016 7.54903C11.7016 8.49658 10.9398 9.26472 10.0002 9.26472C9.06051 9.26472 8.29877 8.49658 8.29877 7.54903C8.29877 6.60148 9.06051 5.83334 10.0002 5.83334C10.9398 5.83334 11.7016 6.60148 11.7016 7.54903Z"
                        stroke="#787878" strokeWidth="1.08333"/>
                    <path
                        d="M17.5 5.83333C17.5 3.99238 15.6345 2.5 13.3333 2.5M2.5 13.3333C2.5 15.6345 3.99238 17.5 5.83333 17.5M5.83333 2.5C3.99238 2.5 2.5 3.99238 2.5 5.83333M13.3333 17.5C15.6345 17.5 17.5 15.6345 17.5 13.3333"
                        stroke="#787878" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
            )
        case 'step-done':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

            )
        case 'success':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={props.width || '24'} height={props.height || '24'} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        case 'back':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={props.width || '24'} height={props.height || '24'} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            )
        default:
            return ('')
    }
}
