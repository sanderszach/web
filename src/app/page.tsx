'use client';
import { Button } from '@chakra-ui/react';
import { Button as ComponentsButton } from "@orders/components";
import type { ComponentType } from 'react';

export default function Home() {
  // const ButtonComponent = ComponentsButton as ComponentType<{ label: string }>;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Orders</h1>
      <Button>Local Button</Button>
      <ComponentsButton label={''}></ComponentsButton>
    </div>
  );
}