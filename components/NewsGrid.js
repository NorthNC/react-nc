
import Image from 'next/image'
import Link from 'next/link'


const newsItems = [
  { title: 'Czech Republic', image: '/members/czech-republic-flag.jpg', summary: 'Avaliable!', detailLink: './czech' },
  { title: 'Denmark', image: '/members/danish-flag.jpg', summary: 'Avaliable!', detailLink: './denmark' },
  { title: 'Estonia', image: '/members/estonia-flag.jpg', summary: 'Avaliable!', detailLink: './estonia' },
  { title: 'Finland', image: '/members/finland-flag.jpg', summary: 'Avaliable!', detailLink: './finland' },
  { title: 'Greenland', image: '/members/greenland-flag.png', summary: 'Avaliable!', detailLink: './greenland' },
  { title: 'Iceland', image: '/members/iceland-flag.jpg', summary: 'Avaliable!', detailLink: './iceland' },
  { title: 'Ireland', image: '/members/ireland-flag.jpg', summary: 'Avaliable!', detailLink: './ireland' },
  { title: 'Latvia', image: '/members/latvia-flag.jpg', summary: 'Avaliable!', detailLink: './latvia' },
  { title: 'Lithuania', image: '/members/lithuanian-flag.jpg', summary: 'Avaliable!', detailLink: './lithuania' },
  { title: 'Norway', image: '/members/norway-flag.jpg', summary: 'Avaliable!', detailLink: './norway' },
  { title: 'Portugal', image: '/members/portugal-flag.jpg', summary: 'Avaliable!', detailLink: './portugal' },
  { title: 'Sweden', image: '/members/swedish-flag.jpg', summary: 'Avaliable!', detailLink: './sweden' },
  { title: 'United Kingdom', image: '/members/united-kingdom-flag.jpg', summary: 'Avaliable!', detailLink: './uk' },
  
]

export default function NewsGrid() {
  return (
    <section className="news">
      <h1 className='header-news'>Our Member Countries</h1>
        <div className="news-grid">
          {newsItems.map((item, index) => (
              <div className="news-item" key={index}>
                <Image src={item.image} alt={item.title} width={300} height={300} />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link href={item.detailLink}>
                  <button>Download Documents</button>
                </Link>
              </div>
          ))}
        </div>
    </section>
  )
}