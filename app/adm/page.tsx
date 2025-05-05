'use client';

import BackgroundImg from '@/components/BackgroundImg';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';
import { isAdmKeyCorrect } from '@/server/actions/isAdmKeyCorrect';
import useUserStore from '@/store/userStore';
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';

export default function Page() {
  const [key, setKey] = useState('');

  const { setIsAdm } = useUserStore();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isAdm = await isAdmKeyCorrect(key);
    setIsAdm(isAdm);
    console.log('isAdm => ', isAdm);
    setKey(isAdm ? 'Welcome Admin' : key);
  }

  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={1} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={1} src={bgSpacesun} />
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '5px' }}>
        <Input value={key} onChange={(e) => setKey(e.currentTarget.value)} />
        <Button type="submit"> 💀 </Button>
      </form>
    </>
  );
}
