'use client';
import { Button } from '@chakra-ui/react';
import { Button as ComponentsButton } from "@orders/components";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Orders</h1>
      <Button>Local Button</Button>
      <ComponentsButton label={''}></ComponentsButton>
    </div>
  );
}