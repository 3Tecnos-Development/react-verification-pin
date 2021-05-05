<p align="center">
  <a href="#">
    <img src="https://user-images.githubusercontent.com/51383115/117195642-e5c03280-adbb-11eb-97c8-67b30c5cf436.gif">
  </a>
</p>

<h3 align="center">react-verification-pin</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/react-verification-pin">
    <img src="https://img.shields.io/npm/v/react-verification-pin.svg" alt="NPM">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT">
  </a>
</p>

## Installation

Install via NPM:

```bash
npm install react-verification-pin

```

## Usage

#### TypeScript

```typescript
import { VerificationPin, StatusType } from "react-verification-pin";

export const YourComponent: React.FC = () => {
  const [status, setStatus] = useState<StatusType>("process");

  const handleOnFinish = (code: string) => {
    setStatus("wait");

    // simulating a search on your api
    if (code === "111111") {
      setTimeout(() => {
        setStatus("error");
      }, 3000);
    } else {
      setTimeout(() => {
        setStatus("success");
      }, 3000);
    }
  };

  return (
    <VerificationPin
      type="number"
      inputsNumber={6}
      status={status}
      title="Your title here"
      subTitle="Your subtitle here"
      onFinish={handleOnFinish}
    />
  );
};
```

## PropTypes

| Key          | Type         | Description                           |
| ------------ | ------------ | ------------------------------------- |
| type         | `number`     | `number`, `text`, `numberAndText`     |
| inputsNumber | `number`     | The count of characters               |
| status       | `StatusType` | `process`, `wait`, `error`, `success` |
| title        | `string`     | Title                                 |
| subTitle     | `string`     | Sub Title                             |
| onChange     | `Function`   | Trigger on input change               |
| onFinish     | `Function`   | Trigger on all character inputs       |
