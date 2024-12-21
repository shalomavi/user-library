export interface User {
  id: string; // UUID
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  location: {
    country: string;
    city: string;
    street: string;
  };
  picture: {
    medium: string;
  };
}
