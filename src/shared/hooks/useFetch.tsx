// import { useEffect, useState } from 'react';

// type ConfigTypes = {
//   mode?: string;
//   cache?: string;
//   credentials?: string;
//   headers?: object;
//   redirect?: string;
//   referrerPolicy?: string;
// };
// interface useFetchParamsType {
//   url: string;
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   configOptions?: ConfigTypes;
//   body?: BodyInit;
// }
// interface useFetchReturnType {
//   data: string | null;
//   errorMessage: string | null;
// }

// export default async function useFetch({
//   url,
//   method,
//   configOptions = {},
//   body,
// }: useFetchParamsType): Promise<useFetchReturnType> {
//   const [data, setData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   // 초기 한번만 실행됩니다
//   useEffect(() => {
//     // method, config는 필수 요청 요소니까 초기화시킴과 동시에 할당
//     let initOptions: Pick<useFetchParamsType, 'method' | 'configOptions' | 'body'> = {
//       method,
//       ...configOptions,
//     };
//     // 만약 바디 데이터가 존재하면(undefined X), JSON으로 변환시켜서 옵션에 추가
//     if (typeof body !== 'undefined') {
//       initOptions = { ...initOptions, body: JSON.stringify(body) };
//     }

//     fetch(url, initOptions);
//   }, []);

//   return {
//     data,
//     errorMessage,
//   };
// }
