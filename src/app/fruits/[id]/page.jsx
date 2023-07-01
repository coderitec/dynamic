
import frtData from '../../fruits.json'

export default function FrtPage({params}) {

  // Find the fruit with the matching id
  const fruit = frtData.fruits.filter((fruit) => fruit.id === params.id);
  // if (!fruit) {
  //   // Handle the case when the fruit is not found
  //   return <p>Fruit not found!</p>;
  // }
  return (
    // <div>
    //   <h1>{fruit.name}</h1>
    //   <p>Botanical Name: {fruit.botanical_name}</p>
    //   <p>{fruit.description}</p>
    //   <p>Classification: {fruit.classification}</p>
    //   {/* Render additional information about the fruit */}
    // </div>
    <div>
      {fruit}
    </div>
  );
}
