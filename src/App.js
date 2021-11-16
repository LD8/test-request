import { useRequest } from 'ahooks'
import request from './request'

// const service = async (url) => {
//   try {
//     const res = await fetch(url,{})
//     if (res.status >= 200 && res.status < 300) {
//       return await res.json()
//     } else {
//       throw res
//     }
//   } catch (err) {
//     // console.log({ err })
//     const { status, statusText, url } = err
//     console.log(`😰 ${status}: ${statusText} @ ${url}`)
//   }
// }

function App() {
  const { data } = useRequest(() => request('/posts/5'), {
    // manual: true,
    // defaultParams: ['https://jsonplaceholder.typicode.com/posts/5']
  })
  console.log({ data })

  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      {JSON.stringify(data)}
    </div>
  )
}

export default App
