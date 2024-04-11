import React from 'react'

const Submenu = () => {

    0

    So it to loop and subMenu on sidebar component, but instead of the subMenu showUp under the parents menu, it showUp on the Right side of the parents menu as pic below: enter image description here
    
    here is my code on how i try to loop the subMenu and The parents item to the react component:
    
    return (
        <div className=" my-4 border-gray-100 pb-4">
          {items.map(({ icon: Icon, iconArrow: IconArrow, ...item }, index) => {
            if (item.subMenu) {
              return (
                <div>
                  <Link href={item.link}>
                    <a
                      onClick={(e) => onMouseClick(e, item.link)}
                      className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <Icon className="text-2xl text-white group-hover:text-red" />
                      <h3 className="text-base text-white group-hover:text-red font-semibold  ">
                        {item.label}
                      </h3>
                      {item.subMenu && dropdown ? (
                        <>
                          <IconArrow className="pl-0 text-2xl text-white group-hover:text-red" />
                        </>
                      ) : (
                        <></>
                      )}{" "}
                      {item.subMenu && dropdown ? (
                        <div>
                          {item.subMenu.map((subitem, index) => {
                            return <>makan</>;
                          })}
                        </div>
                      ) : (
                        <></>
                      )}
                    </a>
                  </Link>
                </div>
              );
            } else {
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <Link href={item.link}>
                    <a
                      onClick={(e) => onMouseClick(e, item.link)}
                      className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                    >
                      <Icon className="text-2xl text-white group-hover:text-red" />
                      <h3 className="text-base text-white group-hover:text-red font-semibold  ">
                        {item.label}
                      </h3>
                    </a>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      );
    };
    
}

export default Submenu