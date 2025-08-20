$(document).ready(function () {
    const programs = [
        {
            title: "키즈랩 8월 - 9월 [미술관에 열린 자연 : 생태 공학자]",
            date: "2025.08.02 - 2025.09.27",
            tags: ["키즈"],
            image: "./../img/program_kids_bugs_img.jpg"
        },
        {
            title: "사운즈S 7월 공연 [명창 정은혜의 '소리']",
            date: "2025. 07. 30",
            tags: ["음악회", "토크"],
            image: "./../img/program_sound_img.jpg"
        },
        {
            title: "7월 음악회 [패밀리 콘서트 with 화음챔버오케스트라]",
            date: "2025. 07. 26",
            tags: ["음악회"],
            image: "./../img/program_orchestra_img.jpg"
        },
        {
            title: "7월 다르게 보기",
            date: "2025. 07. 10 - 2025. 07. 30",
            tags: ["멤버스"],
            image: "./../img/program_dojagi_img.jpg"
        },
        {
            title: "리움 현대미술 소장품전 [청소년 전시 감상 워크북]",
            date: "2025. 04. 15 - 2025. 12. 31",
            tags: ["틴즈"],
            image: "./../img/program_collection_img.jpg"
        },
        {
            title: "키즈랩 7월 [미술관에 열린 자연 : 동물 통역사]",
            date: "2025. 07. 05 - 2025. 07. 26",
            tags: ["키즈"],
            image: "./../img/program_kids_animal_img.jpg"
        },
        {
            title: "2025 어린이 프로그램 및 공간 안내",
            date: "2025. 03. 04 - 2025. 12. 31",
            tags: ["키즈"],
            image: "./../img/program_kids_notice_img.jpg"
        },
        {
            title: "감각 너머 2025 WORKSHOP [보자보다보니까 : 열린 강연]",
            date: "2025. 07. 18",
            tags: ["토크", "접근성"],
            image: "./../img/program_workshop_img.jpg"
        },
        {
            title: "공연 초대 [고잉홈 프로젝트 - 라벨교향악곡 전곡 시리즈]",
            date: "2025. 07. 13 / 2025. 07. 20",
            tags: ["음악회"],
            image: "./../img/program_goinghome_img.jpg"
        },
        {
            title: "보존연구실 투어 - 금속유물실",
            date: "2025. 06. 19",
            tags: ["연구", "접근성"],
            image: "./../img/program_lab_tour_img.jpg"
        },
        {
            title: "전용 관람 프로젝트 [Members Evening]",
            date: "2025. 06. 12",
            tags: ["멤버스"],
            image: "./../img/program_see_art_img.jpg"
        },
        {
            title: "사운즈S 6월 공연 [백주영 바이올린 리사이틀]",
            date: "2025. 06. 10",
            tags: ["음악회", "토크"],
            image: "./../img/program_violin_img.jpg"
        },
        {
            title: "보존연구실 투어 - 도자기실",
            date: "2025. 05. 30",
            tags: ["연구", "접근성"],
            image: "./../img/program_bojohn_img.jpg"
        },
        {
            title: "국외소재 한국문화유산 국제 심포지엄",
            date: "2025. 03. 11",
            tags: ["연구"],
            image: "./../img/program_symposium_img.jpg"
        },
        {
            title: "작가를 만나다 [자연국가 : Nature Rules]",
            date: "2024. 12. 20",
            tags: ["토크", "접근성"],
            image: "./../img/program_nature_img.jpg"
        },
        {
            title: "작가를 만나다 [김수자 - (Un)Folding Bottari]]",
            date: "2024. 10. 02",
            tags: ["토크", "접근성"],
            image: "./../img/program_folding_bottari_img.jpg"
        }
    ];

    function renderPrograms(filterTag = "전체") {
        const container = $(".programFig_s");
        container.empty();
    
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        let filtered = [];
    
        if (filterTag === "신청예정") {
            filtered = programs.filter(p => {
                const programDate = new Date(p.date);
                programDate.setHours(0, 0, 0, 0);
                return programDate > today;
            });
        } else if (filterTag === "신청중") {
            filtered = programs.filter(p => {
                const programDate = new Date(p.date);
                programDate.setHours(0, 0, 0, 0);
                return programDate >= today;
            });
        } else if (filterTag === "신청마감" || filterTag === "종료") {
            filtered = programs.filter(p => {
                const programDate = new Date(p.date);
                programDate.setHours(0, 0, 0, 0);
                return programDate < today;
            });
        } else if (filterTag === "전체") {
            filtered = programs;
        } else {
            filtered = programs.filter(p => p.tags.includes(filterTag));
        }
    
        filtered.forEach(p => {
            const fig = $(`
                <figure>
                    <div style="background-image: url('${p.image}'); background-size: cover; background-position: center;"></div>
                    <figcaption>
                        <p class="proframTit_s">${p.title}</p>
                        <div>
                            <p class="programDate_s">${p.date}</p>
                            <p class="tag_s">
                                ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
                            </p>
                        </div>
                    </figcaption>
                </figure>
            `);
            container.append(fig);
        });
    }

    renderPrograms();

    $(".programTag_s li").click(function () {
        const selectedTag = $(this).text().trim();
        if (selectedTag === "|") return;

        renderPrograms(selectedTag);

        $(this).addClass("selet_s").siblings().removeClass("selet_s");
    });
});