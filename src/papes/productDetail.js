import ProductAPI from "../api/productAPI";
import Footer from "../components/website/footer";
import Header from "../components/website/header";
import { parseRequestUrl, $ } from "../utlis";

const ProductDetail = {

 async render() {

  const { id } = parseRequestUrl();
  const {data: item} = await ProductAPI.read(id);
 
    return/*hmtl*/`${await Header.render()}
    <div class="lg:container mx-auto mt-10 mb-5">
                 <h5 class="text-sm "><a class="hover:text-green-500" href="/#/">trang chủ</a> / <a class="text-green-500"
                href="/#/productdetail/${item.id}">${item.name}</a></h5>
               <div class="grid grid-cols-12 gap-10"></div><div class="grid grid-cols-12 gap-10">
                    <div class="col-span-6 mt-10">
                        <img class="w-full" src="${item.image}" alt="">
                        <p class="text-center mt-4 text-sm">click chuột để phóng to</p>
                        <div class="grid grid-cols-3 mx-32 mt-5 gap-5">
                            <div class="col-span-1 hover:border-green-500 border-2 rounded-md">
                                <img src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                            </div>
                            <div class="col-span-1 hover:border-green-500 border-2 rounded-md">
                                <img src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                            </div>
                            <div class="col-span-1 hover:border-green-500 border-2 rounded-md">
                                <img src="image/pizza-rau-cu-ae6375ac-4b2a-44e6-b280-0bb4c0fba700.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6 mt-10">
                        <h3 class="font-bold text-2xl ">${item.name}</h3>
                        <p class="mt-3">
                            ${item.content}
                        </p>
                        <h5 class="font-bold text-3xl text-red-500 mt-3">${item.price}</h5>
                        <h5 class="mt-2">Gía thị trường: <del>${item.priceoff}</del></h5>
                        <div class="flex border-t border-b mt-5 p-2">
                            <h5 class="mr-3">mã giảm giá:</h5>
                            <p class="ml-3 bg-red-100 text-red-400 p-1">Giảm 10%</p>
                            <p class="ml-3 bg-red-100 text-red-400 p-1">Giảm 20%</p>
                            <p class="ml-3 bg-red-100 text-red-400 p-1">Giảm 30%</p>
                        </div>
                        <div>
                            <h4 class="mt-3 font-bold">Chọn cỡ bánh:</h4>
                            <div class="flex gap-5">
                                <div class="flex mt-2 gap-2">
                                    <input class="mt-1.5" type="checkbox" name="" id="">
                                    <p>Cỡ nhỏ - 7inch</p>
                                </div>
                                <div class="flex mt-2 gap-2">
                                    <input class="mt-1.5" type="checkbox" name="" id="">
                                    <p>Cỡ vừa - 9inch</p>
                                </div>
                                <div class="flex mt-2 gap-2">
                                    <input class="mt-1.5" type="checkbox" name="" id="">
                                    <p>Cỡ lớn - 12inch</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="mt-3 font-bold">Chọn đế bánh:</h4>
                            <div class="flex gap-5">
                                <div class="flex mt-2 gap-2">
                                    <input class="mt-1.5" type="checkbox" name="" id="">
                                    <p>Đế mỏng</p>
                                </div>
                                <div class="flex mt-2 gap-2">
                                    <input class="mt-1.5" type="checkbox" name="" id="">
                                    <p>Đế dày</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 class="font-bold mt-3">Ghi chú:</h5>
                            <div>
                                <textarea class="p-2 border-black border w-full rounded-md focus:outline-none" name="" id=""  rows="1"></textarea>
                            </div>
                        </div>
                        <div>
                            <h5>Số lượng:</h5>
                            <div class="mt-2">
                                <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) & qty > 1 ) result.value--;return false;" class="hover:bg-green-400 focus:outline-none p-2 border border-black">-</button>
                                <input class="border border-black p-2 w-20 text-center" type="text" name="" id="qty" value="1" maxlength="3" onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;" onchange="if(this.value == 0)this.value=1;" autocomplete="off">
                                <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" class="hover:bg-green-400 focus:outline-none p-2 border border-black">+</button>
                            </div>
                            <div class="mt-3">
                                <button type="submit" class="bg-green-500 px-32 py-2 font-bold text-xl text-white hover:text-green-500 focus:outline-none  hover:bg-white hover:border-green-500 border-2">Đặt món</button>
                                <button type="button" class="bg-green-500 py-2 px-2 hover:text-green-500 hover:bg-white hover:border-green-500 border outline-none focus:outline-none"><i class="far fa-heart text-3xl"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold uppercase text-xl mt-16">sản phẩm liên quan</h4>
                    <div class="grid grid-cols-12 gap-5 mt-10">
                        <div class="col-span-3">
                            <div class="border-2 rounded-md pb-2">
                                <div class="overflow-hidden">
                                    <img class="rounded-md hover:scale-110 duration-1000 transform " src="${item.image}" alt=" ">
                                </div>
                                <div class="mx-2">
                                    <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productdetail/${item.id}">${item.name}</a></h3>
                                    <P class="mt-3 text-sm ">${item.content}</P>
                                    <div class="mt-3">
                                        <span class="text-red-500 font-bold ">${item.price}</span>
                                        <span class="font-bold ml-2"><del>${item.priceoff}</del></span>
                                    </div>
                                    <h4
                                        class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                        <a href="#">đặt món</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div class="border-2 rounded-md pb-2">
                                <div class="overflow-hidden">
                                    <img class="rounded-md hover:scale-110 duration-1000 transform " src="${item.image}" alt=" ">
                                </div>
                                <div class="mx-2">
                                    <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productdetail/${item.id}">${item.name}</a></h3>
                                    <P class="mt-3 text-sm ">${item.content}</P>
                                    <div class="mt-3">
                                        <span class="text-red-500 font-bold ">${item.price}</span>
                                        <span class="font-bold ml-2"><del>${item.priceoff}</del></span>
                                    </div>
                                    <h4
                                        class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                        <a href="#">đặt món</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div class="border-2 rounded-md pb-2">
                                <div class="overflow-hidden">
                                    <img class="rounded-md hover:scale-110 duration-1000 transform " src="${item.image}" alt=" ">
                                </div>
                                <div class="mx-2">
                                    <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productdetail/${item.id}">${item.name}</a></h3>
                                    <P class="mt-3 text-sm ">${item.content}</P>
                                    <div class="mt-3">
                                        <span class="text-red-500 font-bold ">${item.price}</span>
                                        <span class="font-bold ml-2"><del>${item.priceoff}</del></span>
                                    </div>
                                    <h4
                                        class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                        <a href="#">đặt món</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div class="border-2 rounded-md pb-2">
                                <div class="overflow-hidden">
                                    <img class="rounded-md hover:scale-110 duration-1000 transform " src="${item.image}" alt=" ">
                                </div>
                                <div class="mx-2">
                                    <h3 class="hover:text-green-500 font-bold mt-3"><a href="/#/productdetail/${item.id}">${item.name}</a></h3>
                                    <P class="mt-3 text-sm ">${item.content}</P>
                                    <div class="mt-3">
                                        <span class="text-red-500 font-bold ">${item.price}</span>
                                        <span class="font-bold ml-2"><del>${item.priceoff}</del></span>
                                    </div>
                                    <h4
                                        class="font-bold uppercase mt-2 text-white bg-green-500 text-sm text-center py-2 hover:bg-green-600 duration-200 rounded-md">
                                        <a href="#">đặt món</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  </div>
                    ${await Footer.render()}
              `
 }
};
export default ProductDetail;
