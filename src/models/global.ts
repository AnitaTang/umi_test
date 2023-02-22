// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const previouslyMaxSafeInteger = 9007199254740991n;
  console.log('test param-', previouslyMaxSafeInteger);
  return {
    name,
    setName,
  };
};

export default useUser;
