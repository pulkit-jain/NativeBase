import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button
      size="sm"
      colorScheme="emerald"
      variant={'solid'}
      onPress={() => console.log('hello world')}
      _text={{ fontWeight: 700 }}
    >
      {true ? 'hey' : 'nay'}
    </Button>
  );
}
