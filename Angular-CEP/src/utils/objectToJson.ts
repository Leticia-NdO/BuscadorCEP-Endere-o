export default function ObjectToJson(content: Object){
    const stringContent = JSON.stringify(content)
    return JSON.parse(stringContent)
}