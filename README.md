<h3 align="center">react-verification-code</h3>
<p align="center">This library aims to facilitate access to a non-relational database.</p>

## Installation

Install via NPM:

```bash
npm install react-verification-code

```

## Usage

#### TypeScript

```typescript
import { VerificationCode, StatusType } from "react-verification-code";

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
    <VerificationCode
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

| Key          | Type         | Description                                                 |
| ------------ | ------------ | ----------------------------------------------------------- |
| type         | `number`     | Allows only numbers, only letters, only letters and numbers |
| inputsNumber | `number`     | The count of characters                                     |
| status       | `StatusType` | `process`, `wait`, `error`, `success`                       |
| title        | `string`     | Title                                                       |
| subTitle     | `string`     | Sub Title                                                   |
| onChange     | `Function`   | Trigger on input change                                     |
| onFinish     | `Function`   | Trigger on all character inputs                             |
