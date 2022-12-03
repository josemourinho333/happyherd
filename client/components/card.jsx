import Modal from './modal';
import { makeSingular } from '../helpers/makeSingular';

const Card = ({base, id, title, content, img, category, dead}) => {
    return (
      <>
        <div className="carousel-item">
          <div className={`card h-[30rem] ${base ? "opacity-0 bg-transparent shadow-none w-0 sm:w-[7rem] md:w-[10rem] lg:w-[12rem] xl:w-[20rem] 2xl:w-[28rem]" : `bg-base-100 shadow-lg w-[22rem] md:w-[26rem] lg:w-[30rem]`} rounded-lg`} style={{backgroundImage: "url("+ img + ")", backgroundSize: '110% 30rem', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}}>
            {
              base
                ? <></>
                : <>  
                    {/* <figure><img src={img} alt={`${title}-img`} /></figure> */}
                    <div className="card-body h-[500px] p-0">
                      <p></p>
                      <div className="card-actions justify-between flex flex-col bg-gradient-to-t from-black to-transparent">
                        <div className="px-10 pb-10">
                          <div className="badge badge-md badge-neutral">{makeSingular(category)}</div>
                          <h2 className="card-title text-base-100 text-3xl font-bold mt-2">{title}</h2>
                        </div>
                      
                        {/* {dead
                          ? <></>
                          : <button className="btn btn-outline btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Sponsor Me</button>
                        } */}
                      </div>
                    </div>
                  </>
            }
          </div>
        </div>
        {
          base
            ? <></>
            : <Modal name={title} bio={content} img={img} slug={title} dead={dead}/>
        }
      </>
    )
};

export default Card;