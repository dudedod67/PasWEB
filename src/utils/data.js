const contactData = () => {
    return [
        {
            id : "1",
            nama : "Encanto",
            desc : "Encanto adalah film animasi terbaru dari Disney. Film ini mengisahkan tentang keluarga Madrigal yang tinggal di sebuah komunitas yang dikelilingi pegunungan di Kolombia. Keluarga ini sangat dihormati para warga komunitas itu karena mereka dianugerahi dengan sihir yang membantu mereka.",
            image : './img/encanto.jpeg',
            createdAt : new Date().toLocaleString()
        },
        {
            id : "2",
            nama: "Luca",
            desc : "Luca adalah sebuah film drama ber bahasa Malayalam India tahun 2019 garapan Arun Bose dan diproduksi oleh Linto Thomas dan Prince Hussain di bawah studio Stories & Thoughts Productions. Film tersebut ditulis oleh Mridul George dan menampilkan Tovino Thomas dan Ahaana Krishna dalam peran-peran utama.",
            image: './img/luca.jpg',
            createdAt : new Date().toLocaleString()
        },
        {
            id : "3",
            nama: "Coco",
            desc : "Film Coco menceritakan tentang dua dunia; yakni dunia kehidupan dan dunia kematian yang melebur jadi satu akibat ulah seorang anak lelaki asal Meksiko bernama Miguel.",
            image: './img/coco.jpg',
            createdAt : new Date().toLocaleString()
        },
    ];
}
export { contactData };
    
