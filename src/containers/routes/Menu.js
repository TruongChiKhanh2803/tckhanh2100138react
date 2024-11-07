import Item from './Item';

const Menu = () => {
    const list = [
        { link: "/", content: "Trang chủ" },
        { link: "/groups", content: "Nhóm sản phẩm" },
        { link: "/products", content: "Danh sách sản phẩm" },

    ];

    return (
        <ul>
            {list.map((item, index) => (
                <Item key={index} link={item.link} content={item.content} />
            ))}
        </ul>
    );
};

export default Menu;
