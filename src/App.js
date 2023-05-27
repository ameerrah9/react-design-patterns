import { RegularList } from './RegularList';
import { NumberedList } from './NumberedList';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { LargeProductListItem } from './products/LargeProductListItem';
import { SmallProductListItem } from './products/SmallProductListItem';

const people = [
  {
    name: 'Bell Hooks',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Audrey Lorde',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Assata Shakur',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName='person'
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName='person'
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName='product'
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
