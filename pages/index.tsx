import React from 'react';
import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Tag } from '../components/Tag/Tag';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Submit</Button>
      <Button appearance="ghost" arrow="down">Submit</Button>
      <Paragraph size="l">Some paragraph</Paragraph>
      <Paragraph size="m">Some paragraph</Paragraph>
      <Paragraph size="s">Some paragraph</Paragraph>
      <Tag size='m' color='red' href='https://yandex.ru'>Yandex</Tag>
      <Tag size='m' color='green'>Development</Tag>
      <Tag size='m' href='https://google.com'>Design</Tag>
    </>
  );
}
