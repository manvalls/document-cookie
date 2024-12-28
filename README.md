# document-cookie

A React component to set cookies in the document object.

## Installation

To install the package, run:

```bash
npm install document-cookie
```

## Usage

Import the `DocumentCookie` component and use it in your React application:

```tsx
import DocumentCookie from "document-cookie";

const App = () => {
  return (
    <div>
      <DocumentCookie
        name="myCookie"
        value="cookieValue"
        expires={new Date("2023-12-31")}
        path="/"
        domain="example.com"
        secure={true}
      />
    </div>
  );
};

export default App;
```

## Props

The `DocumentCookie` component accepts the following props:

- `name` (string, required): The name of the cookie.
- `value` (string, optional): The value of the cookie.
- `expires` (Date, optional): The expiration date of the cookie.
- `maxAge` (number, optional): The maximum age of the cookie in seconds.
- `partitioned` (boolean, optional): Whether the cookie is partitioned.
- `path` (string, optional): The path where the cookie is valid.
- `sameSite` ("strict" | "lax" | "none", optional): The SameSite attribute of the cookie.
- `domain` (string, optional): The domain where the cookie is valid.
- `secure` (boolean, optional): Whether the cookie should only be sent over secure protocols.

## License

This project is licensed under the MIT License.
