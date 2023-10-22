import { convertTTFToWOFF2 } from '@napi-rs/ttf2woff2'
export default function (buffer) {
    return convertTTFToWOFF2(buffer)
}