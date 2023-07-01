import Link from 'next/link'
import frtData from '../fruits.json'



export default function page() {

    const fruits =  frtData.fruits.map((fruit) => (
        <Link href={`/fruits/${fruit.id}`}>
      <li key={fruit.id}>{fruit.name}</li>
        </Link>
    ))
    
  return (
    <div>
         {fruits}
    </div>
  )
}
