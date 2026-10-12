const literatureData={
    poem:[
      {"title": "Công cha nghĩa mẹ", "text": "Công cha như núi Thái Sơn\nNghĩa mẹ như nước trong nguồn chảy ra\nMột lòng thờ mẹ kính cha\nCho tròn chữ hiếu mới là đạo con.", "meaning": "Bài ca nhắc chúng ta biết yêu thương, kính trọng và biết ơn cha mẹ."},
      {"title": "Bầu ơi thương lấy bí cùng", "text": "Bầu ơi thương lấy bí cùng\nTuy rằng khác giống nhưng chung một giàn.", "meaning": "Mọi người nên yêu thương, giúp đỡ nhau dù mỗi người có thể khác nhau."},
      {"title": "Nhiễu điều phủ lấy giá gương", "text": "Nhiễu điều phủ lấy giá gương\nNgười trong một nước phải thương nhau cùng.", "meaning": "Người Việt Nam cùng một quê hương nên đoàn kết và sẻ chia."},
      {"title": "Trong đầm gì đẹp bằng sen", "text": "Trong đầm gì đẹp bằng sen\nLá xanh bông trắng lại chen nhị vàng\nNhị vàng bông trắng lá xanh\nGần bùn mà chẳng hôi tanh mùi bùn.", "meaning": "Bài ca khen vẻ đẹp thanh cao, trong sạch của hoa sen."},
      {"title": "Anh em như thể tay chân", "text": "Anh em như thể tay chân\nRách lành đùm bọc, dở hay đỡ đần.", "meaning": "Anh chị em trong nhà cần thương yêu và chăm sóc lẫn nhau."},
      {"title": "Rủ nhau đi cấy đi cày", "text": "Rủ nhau đi cấy đi cày\nBây giờ khó nhọc, có ngày phong lưu.", "meaning": "Chăm chỉ lao động hôm nay sẽ đem lại thành quả tốt đẹp ngày mai."},
      {"title": "Cày đồng đang buổi ban trưa", "text": "Cày đồng đang buổi ban trưa\nMồ hôi thánh thót như mưa ruộng cày\nAi ơi bưng bát cơm đầy\nDẻo thơm một hạt, đắng cay muôn phần.", "meaning": "Hạt cơm quý giá vì có công sức của người nông dân; mình hãy biết trân trọng thức ăn."},
      {"title": "Một cây làm chẳng nên non", "text": "Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao.", "meaning": "Khi mọi người cùng chung sức, việc khó cũng có thể hoàn thành."},
      {"title": "Con cò bay lả bay la", "text": "Con cò bay lả bay la\nBay từ cửa phủ bay ra cánh đồng\nTình tính tang, tang tính tình\nCó chị có anh, có tình mẹ cha.", "meaning": "Lời ca dân gian gợi cảnh đồng quê và tình cảm gia đình đầm ấm."},
      {"title": "Trâu ơi ta bảo trâu này", "text": "Trâu ơi ta bảo trâu này\nTrâu ra ngoài ruộng trâu cày với ta\nCấy cày vốn nghiệp nông gia\nTa đây trâu đấy ai mà quản công\nBao giờ cây lúa còn bông\nThì còn ngọn cỏ ngoài đồng trâu ăn.", "meaning": "Bài ca thể hiện tình cảm thân thiết giữa người nông dân và con trâu chăm chỉ."},
      {"title": "Muốn sang thì bắc cầu kiều", "text": "Muốn sang thì bắc cầu kiều\nMuốn con hay chữ thì yêu lấy thầy.", "meaning": "Câu ca nhắc chúng ta kính trọng thầy cô và trân quý việc học."},
      {"title": "Ai ơi giữ chí cho bền", "text": "Ai ơi giữ chí cho bền\nDù ai xoay hướng đổi nền mặc ai.", "meaning": "Hãy kiên định với mục tiêu tốt đẹp và cố gắng đến cùng."},
      {"title": "Lên non mới biết non cao", "text": "Lên non mới biết non cao\nNuôi con mới biết công lao mẹ hiền.", "meaning": "Câu ca nhắc về công lao và tình yêu thương vất vả của mẹ."},
      {"title": "Gió đưa cành trúc la đà", "text": "Gió đưa cành trúc la đà\nTiếng chuông Trấn Vũ, canh gà Thọ Xương\nMịt mù khói tỏa ngàn sương\nNhịp chày Yên Thái, mặt gương Tây Hồ.", "meaning": "Lời ca vẽ nên cảnh Hồ Tây và nhịp sống thanh bình của Thăng Long xưa."},
      {"title": "Thân cò lặn lội", "text": "Thân cò lặn lội bờ sông\nGánh gạo đưa chồng tiếng khóc nỉ non.", "meaning": "Ca ngợi sự vất vả, tần tảo của người phụ nữ Việt Nam."},
      {"title": "Cá không ăn muối cá ươn", "text": "Cá không ăn muối cá ươn\nCon cãi cha mẹ trăm đường con hư.", "meaning": "Nhắc nhở con cái nên nghe lời dạy bảo của cha mẹ."},
      {"title": "Chim khôn kêu tiếng rảnh rang", "text": "Chim khôn kêu tiếng rảnh rang\nNgười khôn nói tiếng dịu dàng dễ nghe.", "meaning": "Người khôn ngoan nói năng nhẹ nhàng, dễ mến."},
      {"title": "Rủ nhau xem cảnh Kiếm Hồ", "text": "Rủ nhau xem cảnh Kiếm Hồ\nXem cầu Thê Húc, xem chùa Ngọc Sơn\nĐài Nghiên, tháp Bút chưa mòn\nHỏi ai gây dựng nên non nước này.", "meaning": "Ca ngợi cảnh đẹp và lịch sử của Hồ Hoàn Kiếm Hà Nội."},
      {"title": "Thuyền về có nhớ bến chăng", "text": "Thuyền về có nhớ bến chăng\nBến thì một dạ khăng khăng đợi thuyền.", "meaning": "Tình nghĩa thủy chung, trước sau như một."},
      {"title": "Công cha như núi ngất trời", "text": "Công cha như núi ngất trời\nNghĩa mẹ như nước ở ngoài biển Đông\nNúi cao biển rộng mênh mông\nCù lao chín chữ ghi lòng con ơi.", "meaning": "Nhắc nhở công lao to lớn của cha mẹ."},
      {"title": "Khăn thương nhớ ai", "text": "Khăn thương nhớ ai\nKhăn rơi xuống đất\nKhăn thương nhớ ai\nKhăn vắt lên vai.", "meaning": "Nỗi nhớ da diết của người đang yêu."},
      {"title": "Trèo lên cây bưởi hái hoa", "text": "Trèo lên cây bưởi hái hoa\nBước xuống vườn cà hái nụ tầm xuân\nNụ tầm xuân nở ra xanh biếc\nEm có chồng rồi anh tiếc lắm thay.", "meaning": "Lời tỏ tình duyên dáng, ý nhị của trai gái xưa."},
      {"title": "Ước gì sông rộng một gang", "text": "Ước gì sông rộng một gang\nBắc cầu dải yếm để chàng sang chơi.", "meaning": "Ước mong gần gũi, sum vầy của lứa đôi."},
      {"title": "Tát nước đầu đình", "text": "Tát nước đầu đình\nĐể em lấy chồng, anh tiếc lắm thay.", "meaning": "Tình cảm trai gái làng quê mộc mạc, chân thành."},
      {"title": "Hỡi cô tát nước bên đàng", "text": "Hỡi cô tát nước bên đàng\nSao cô múc ánh trăng vàng đổ đi.", "meaning": "Lời khen vẻ đẹp duyên dáng, tinh nghịch của cô gái quê."},
      {"title": "Ru con", "text": "Ầu ơ... ví dầu cầu ván đóng đinh\nCầu tre lắc lẻo gập ghềnh khó đi\nKhó đi mẹ dắt con đi\nCon đi trường học, mẹ đi trường đời.", "meaning": "Lời ru ngọt ngào, mong con học hành nên người."},
      {"title": "Mẹ già như chuối ba hương", "text": "Mẹ già như chuối ba hương\nNhư xôi nếp một, như đường mía lau.", "meaning": "Ca ngợi sự ngọt ngào, quý giá của tình mẹ."},
      {"title": "Cô kia cắt cỏ bên sông", "text": "Cô kia cắt cỏ bên sông\nCó muốn ăn nhãn thì lồng sang đây.", "meaning": "Lời mời gọi đùa vui, tình tứ của trai gái."},
      {"title": "Đêm qua nhớ bạn", "text": "Đêm qua nhớ bạn, bạn ơi\nNhớ người tri kỷ, nhớ nơi hẹn hò.", "meaning": "Nỗi nhớ bạn bè, người thân thiết."},
      {"title": "Gió đưa cành trúc", "text": "Gió đưa cành trúc la đà\nTiếng chuông Trấn Vũ canh gà Thọ Xương.", "meaning": "Khung cảnh yên bình của Hà Nội xưa."}
    ],
    proverb:[
      {"title": "Có công mài sắt, có ngày nên kim", "text": "Có công mài sắt, có ngày nên kim.", "meaning": "Kiên trì và chăm chỉ thì việc khó đến mấy cũng có thể làm được."},
      {"title": "Uống nước nhớ nguồn", "text": "Uống nước nhớ nguồn.", "meaning": "Khi nhận được điều tốt đẹp, hãy nhớ ơn người đã tạo ra điều ấy."},
      {"title": "Ăn quả nhớ kẻ trồng cây", "text": "Ăn quả nhớ kẻ trồng cây.", "meaning": "Hãy biết ơn những người đã chăm sóc, giúp đỡ và làm việc tốt cho mình."},
      {"title": "Đi một ngày đàng, học một sàng khôn", "text": "Đi một ngày đàng, học một sàng khôn.", "meaning": "Đi nhiều nơi, quan sát và trải nghiệm giúp chúng ta học thêm điều mới."},
      {"title": "Gần mực thì đen, gần đèn thì sáng", "text": "Gần mực thì đen,\nGần đèn thì sáng.", "meaning": "Bạn bè và môi trường xung quanh có thể ảnh hưởng đến cách sống của mình; hãy gần gũi điều tốt."},
      {"title": "Lá lành đùm lá rách", "text": "Lá lành đùm lá rách.", "meaning": "Người có điều kiện hơn hãy giúp đỡ người đang gặp khó khăn."},
      {"title": "Không thầy đố mày làm nên", "text": "Không thầy đố mày làm nên.", "meaning": "Thầy cô dạy dỗ và chỉ dẫn giúp chúng ta học tập, trưởng thành."},
      {"title": "Kiến tha lâu cũng đầy tổ", "text": "Kiến tha lâu cũng đầy tổ.", "meaning": "Góp nhặt và chăm chỉ từng chút một sẽ tạo nên kết quả lớn."},
      {"title": "Thất bại là mẹ thành công", "text": "Thất bại là mẹ thành công.", "meaning": "Sau mỗi lần chưa làm được, ta có thể rút kinh nghiệm để làm tốt hơn."},
      {"title": "Tốt gỗ hơn tốt nước sơn", "text": "Tốt gỗ hơn tốt nước sơn.", "meaning": "Tính cách tốt và tấm lòng đẹp quý hơn vẻ ngoài hào nhoáng."},
      {"title": "Một con ngựa đau, cả tàu bỏ cỏ", "text": "Một con ngựa đau, cả tàu bỏ cỏ.", "meaning": "Khi một người gặp khó khăn, những người xung quanh nên quan tâm và giúp đỡ."},
      {"title": "Chớ thấy sóng cả mà ngã tay chèo", "text": "Chớ thấy sóng cả mà ngã tay chèo.", "meaning": "Gặp khó khăn thì đừng vội nản lòng; hãy bình tĩnh và cố gắng."},
      {"title": "Thương người như thể thương thân", "text": "Thương người như thể thương thân.", "meaning": "Hãy yêu thương người khác như yêu thương chính mình."},
      {"title": "Học thầy không tày học bạn", "text": "Học thầy không tày học bạn.", "meaning": "Học từ bạn bè cũng rất quan trọng và hiệu quả."},
      {"title": "Ăn trông nồi, ngồi trông hướng", "text": "Ăn trông nồi, ngồi trông hướng.", "meaning": "Khi ăn uống, ngồi chỗ nào cũng cần ý tứ, lịch sự."},
      {"title": "Có chí thì nên", "text": "Có chí thì nên.", "meaning": "Có ý chí, quyết tâm thì sẽ làm được việc."},
      {"title": "Nước chảy đá mòn", "text": "Nước chảy đá mòn.", "meaning": "Kiên trì lâu ngày sẽ làm được việc tưởng chừng không thể."},
      {"title": "Lửa thử vàng, gian nan thử sức", "text": "Lửa thử vàng, gian nan thử sức.", "meaning": "Khó khăn giúp ta biết mình mạnh mẽ đến đâu."},
      {"title": "Đói cho sạch, rách cho thơm", "text": "Đói cho sạch, rách cho thơm.", "meaning": "Dù nghèo khó vẫn phải giữ lòng tự trọng, trong sạch."},
      {"title": "Cái nết đánh chết cái đẹp", "text": "Cái nết đánh chết cái đẹp.", "meaning": "Tính nết tốt đẹp quan trọng hơn vẻ ngoài."},
      {"title": "Ở hiền gặp lành", "text": "Ở hiền gặp lành.", "meaning": "Sống hiền lành, tốt bụng sẽ gặp điều may mắn."},
      {"title": "Một miếng khi đói bằng một gói khi no", "text": "Một miếng khi đói bằng một gói khi no.", "meaning": "Sự giúp đỡ lúc khó khăn rất quý giá."},
      {"title": "Chị ngã em nâng", "text": "Chị ngã em nâng.", "meaning": "Anh chị em phải giúp đỡ nhau khi hoạn nạn."},
      {"title": "Giấy rách phải giữ lấy lề", "text": "Giấy rách phải giữ lấy lề.", "meaning": "Dù nghèo khó vẫn phải giữ nề nếp, gia phong."},
      {"title": "Học ăn, học nói, học gói, học mở", "text": "Học ăn, học nói, học gói, học mở.", "meaning": "Cần học cách ứng xử, giao tiếp lịch sự từ những việc nhỏ nhất."},
      {"title": "Lời nói chẳng mất tiền mua", "text": "Lời nói chẳng mất tiền mua\nLựa lời mà nói cho vừa lòng nhau.", "meaning": "Nên nói năng nhẹ nhàng, suy nghĩ trước khi nói."},
      {"title": "Tấc đất tấc vàng", "text": "Tấc đất tấc vàng.", "meaning": "Đất đai rất quý, phải biết trân trọng và giữ gìn."},
      {"title": "Uốn lưỡi bảy lần trước khi nói", "text": "Uốn lưỡi bảy lần trước khi nói.", "meaning": "Phải suy nghĩ kỹ trước khi nói để tránh làm người khác buồn."},
      {"title": "Cần cù bù thông minh", "text": "Cần cù bù thông minh.", "meaning": "Chăm chỉ có thể bù đắp cho việc chưa nhanh nhạy."},
      {"title": "Ngựa chạy có bầy, chim bay có bạn", "text": "Ngựa chạy có bầy, chim bay có bạn.", "meaning": "Ai cũng cần bạn bè, cần sống đoàn kết."},
      {"title": "Có bột mới gột nên hồ", "text": "Có bột mới gột nên hồ.", "meaning": "Muốn làm nên việc phải có sự chuẩn bị, nguyên liệu."},
      {"title": "Im lặng là vàng", "text": "Im lặng là vàng.", "meaning": "Biết im lặng đúng lúc là điều quý giá."},
      {"title": "Tay làm hàm nhai", "text": "Tay làm hàm nhai, tay quai miệng trễ.", "meaning": "Có lao động thì mới có ăn."},
      {"title": "Bán anh em xa mua láng giềng gần", "text": "Bán anh em xa, mua láng giềng gần.", "meaning": "Hàng xóm gần gũi giúp đỡ nhau rất quan trọng."},
      {"title": "Chim có tổ, người có tông", "text": "Chim có tổ, người có tông.", "meaning": "Ai cũng có quê hương, cội nguồn, dòng họ."},
      {"title": "Con hơn cha là nhà có phúc", "text": "Con hơn cha là nhà có phúc.", "meaning": "Con cái giỏi giang hơn cha mẹ là niềm tự hào của gia đình."},
      {"title": "Góp gió thành bão", "text": "Góp gió thành bão.", "meaning": "Nhiều việc nhỏ hợp lại có thể thành việc lớn."},
      {"title": "Một chữ cũng là thầy, nửa chữ cũng là thầy", "text": "Một chữ cũng là thầy, nửa chữ cũng là thầy.", "meaning": "Ai dạy mình dù chỉ một chút cũng đáng kính trọng."},
      {"title": "Ăn cỗ đi trước, lội nước đi sau", "text": "Ăn cỗ đi trước, lội nước đi sau.", "meaning": "Việc vui thì hăng hái, việc khó thì cần can đảm gánh vác."},
      {"title": "Đi hỏi già, về nhà hỏi trẻ", "text": "Đi hỏi già, về nhà hỏi trẻ.", "meaning": "Người già có nhiều kinh nghiệm, trẻ nhỏ thì thật thà, đáng tin."}
    ],
      story:[
      {title:'Thánh Gióng',text:'Ngày xưa, vào đời vua Hùng thứ sáu, giặc Ân kéo sang xâm lược nước ta. Nhà vua sai sứ giả đi khắp nơi tìm người tài cứu nước. Ở làng Gióng có hai vợ chồng đã lớn tuổi, sống hiền lành mà mãi chưa có con. Một hôm, người mẹ ra đồng, nhìn thấy một dấu chân rất to liền ướm thử. Về nhà, bà mang thai và sinh ra một cậu bé khôi ngô, đặt tên là Gióng.\nLạ thay, Gióng lên ba tuổi vẫn chưa biết nói, biết cười, cũng chưa biết đi. Nghe tiếng sứ giả rao tìm người đánh giặc, Gióng bỗng cất tiếng gọi mẹ, xin mời sứ giả vào nhà. Cậu nói với sứ giả hãy về tâu vua rèn cho mình một con ngựa sắt, một chiếc roi sắt và bộ áo giáp sắt. Từ đó, Gióng ăn thật khỏe. Bà con trong làng góp gạo, góp rau nuôi cậu lớn nhanh như thổi.\nKhi ngựa sắt, roi sắt và áo giáp được mang đến, Gióng vươn vai thành một tráng sĩ cao lớn. Chàng mặc áo giáp, cầm roi, nhảy lên ngựa. Ngựa hí vang, phun lửa, lao thẳng vào quân giặc. Roi sắt gãy, Gióng nhổ những bụi tre bên đường làm vũ khí, đánh đuổi giặc ra khỏi bờ cõi.\nĐất nước trở lại thanh bình, Gióng cưỡi ngựa lên đỉnh núi Sóc rồi bay về trời. Vua cho lập đền thờ để người dân tưởng nhớ người anh hùng nhỏ tuổi. Câu chuyện ấy được truyền lại qua nhiều đời với tên gọi Thánh Gióng.',meaning:'Truyện ca ngợi lòng yêu nước, sự dũng cảm và sức mạnh đoàn kết của nhân dân.'},
      {title:'Sự tích bánh chưng, bánh dày',text:'Ngày xưa, sau khi đánh thắng giặc ngoại xâm, vua Hùng đã già và muốn chọn người nối ngôi. Vua gọi các hoàng tử đến, bảo rằng ai tìm được lễ vật ngon lành, ý nghĩa nhất để dâng cúng tổ tiên thì sẽ được truyền ngôi. Các hoàng tử tỏa đi khắp nơi tìm sơn hào hải vị và của quý.\nNgười con trai thứ mười tám tên là Lang Liêu vốn hiền hậu, chăm chỉ. Mẹ mất sớm, chàng sống giản dị, quanh năm làm ruộng nên không có vàng bạc châu báu. Đang lo lắng, chàng được một vị thần mách rằng trong trời đất, quý nhất là hạt gạo nuôi sống con người. Hãy dùng gạo nếp làm hai thứ bánh để dâng vua cha.\nLang Liêu chọn gạo nếp ngon, đậu xanh và thịt lợn. Chàng gói bánh hình vuông bằng lá xanh, gọi là bánh chưng, tượng trưng cho mặt đất. Chàng giã xôi thành chiếc bánh tròn, trắng mịn, gọi là bánh dày, tượng trưng cho bầu trời. Đến ngày hẹn, các hoàng tử đem lễ vật về cung. Vua Hùng nếm bánh, nghe Lang Liêu giải thích rồi rất hài lòng vì món bánh giản dị mà chứa đựng ý nghĩa sâu sắc.\nLang Liêu được chọn nối ngôi. Vua truyền cho mọi người cách làm hai thứ bánh để dâng cúng tổ tiên vào dịp lễ Tết. Từ đó, bánh chưng xanh và bánh dày trắng trở thành món ăn thân thuộc trong ngày Tết của người Việt.',meaning:'Truyện nhắc chúng ta trân trọng hạt gạo, người lao động và tình cảm gia đình.'},
      {title:'Cây tre trăm đốt',text:'Ngày xưa, có một anh nông dân nghèo hiền lành đến làm thuê cho một phú ông. Anh chăm chỉ cày cấy, cuốc đất, làm việc từ sáng sớm đến tối muộn. Phú ông hứa rằng nếu anh làm việc thật tốt trong ba năm thì sẽ gả con gái cho anh. Tin lời, anh hết lòng giúp đỡ gia đình phú ông.\nBa năm trôi qua, phú ông lại muốn gả con gái cho một người giàu có hơn. Ông bảo anh nông dân vào rừng tìm một cây tre có đủ một trăm đốt rồi mới được về cưới vợ. Anh đi tìm khắp rừng mà chẳng thấy cây tre nào như thế, buồn bã ngồi khóc. Bỗng một ông Bụt hiện lên, hỏi chuyện rồi dạy anh chặt đủ một trăm đốt tre rời và đọc câu thần chú “Khắc nhập, khắc nhập” để các đốt tre nối lại.\nAnh làm theo, một cây tre dài trăm đốt hiện ra. Anh mừng rỡ mang cây về. Thấy cây tre kỳ lạ, phú ông chạy tới xem. Anh đọc “Khắc nhập”, phú ông bị dính vào cây tre. Ông van xin, hứa sẽ giữ lời. Anh đọc “Khắc xuất”, các đốt tre rời ra và phú ông được thả.\nPhú ông nhận lỗi, tổ chức đám cưới cho anh nông dân và con gái. Từ đó, ông hiểu rằng phải biết giữ lời hứa, còn mọi người trong làng quý mến anh vì tính thật thà, chăm chỉ.',meaning:'Truyện khuyên chúng ta chăm chỉ, sống thật thà và luôn giữ lời hứa.'},
      {title:'Sơn Tinh, Thủy Tinh',text:'Vua Hùng có người con gái tên là Mị Nương, xinh đẹp và hiền dịu. Khi công chúa đến tuổi lấy chồng, nhà vua muốn chọn một người tài giỏi để chăm sóc nàng. Hai chàng trai cùng đến cầu hôn: Sơn Tinh, chúa miền núi, có thể dời núi, dựng thành; và Thủy Tinh, chúa miền nước, có thể gọi mưa, dâng sóng.\nCả hai đều tài giỏi, vua Hùng khó lòng chọn được. Cuối cùng, vua nói ai đem sính lễ đến trước vào sáng hôm sau sẽ được cưới Mị Nương. Sính lễ gồm voi chín ngà, gà chín cựa, ngựa chín hồng mao cùng nhiều lễ vật quý. Sáng hôm sau, Sơn Tinh đem đủ sính lễ đến trước, đón công chúa về núi.\nThủy Tinh đến sau, không cưới được Mị Nương nên tức giận, gọi mưa to, gió lớn, dâng nước lên cao để đuổi theo. Nước dâng đến đâu, Sơn Tinh nâng núi cao đến đó, dựng đồi, đắp lũy để bảo vệ người dân và muôn vật. Cuộc chiến kéo dài, cuối cùng Thủy Tinh mệt mỏi phải rút nước về.\nTừ đó, năm nào Thủy Tinh cũng dâng nước lên đánh Sơn Tinh, nhưng lần nào cũng thất bại. Người xưa kể câu chuyện này để giải thích nạn mưa lũ mỗi năm và ca ngợi quyết tâm chống thiên tai của người Việt.',meaning:'Truyện giải thích hiện tượng lũ lụt và ca ngợi con người đoàn kết, bền bỉ bảo vệ quê hương.'},
      {title:'Sự tích chú Cuội cung trăng',text:'Ngày xưa, có một tiều phu tên là Cuội sống trong rừng. Một hôm, Cuội gặp một con hổ con bị thương. Chàng dùng lá của một cây thuốc quý đắp lên vết thương. Chẳng bao lâu, hổ con khỏe lại. Thấy cây thuốc có thể cứu sống muôn loài, Cuội đem cây về trồng trước nhà và dặn vợ chỉ tưới cây bằng nước sạch.\nNhờ cây thuốc, Cuội cứu được nhiều người. Mỗi lần có ai bị bệnh nặng, chàng đều hái lá thuốc chữa trị. Tiếng lành đồn xa, ai gặp chuyện khó cũng tìm đến nhờ Cuội giúp. Chàng luôn sẵn lòng cứu người, không đòi hỏi trả ơn.\nMột hôm, vợ Cuội quên lời dặn, dùng nước bẩn tưới cây. Cây thuốc quý bỗng rung lên, bật rễ khỏi mặt đất rồi bay vút lên trời. Cuội vừa đi làm về, thấy vậy vội chạy đến ôm chặt lấy gốc cây. Cây cứ bay cao mãi, kéo Cuội lên tận cung trăng.\nTừ đó, Cuội ở lại trên mặt trăng cùng cây thuốc quý. Những đêm trăng sáng, người dưới trần gian nhìn lên thường thấy bóng một người ngồi bên gốc cây. Câu chuyện về chú Cuội và cây đa trở thành lời kể thân quen mỗi khi trẻ em ngắm trăng rằm.',meaning:'Truyện dân gian dùng trí tưởng tượng để kể về hình bóng chú Cuội trên mặt trăng.'},
      {title:'Sự tích trầu cau',text:'Ngày xưa, có hai anh em sinh đôi tên là Tân và Lang giống nhau như đúc, thân thiết chẳng rời. Khi trưởng thành, người anh là Tân kết duyên với một cô gái hiền lành. Từ ngày có gia đình, Tân bận rộn hơn, nhưng hai anh em vẫn luôn yêu thương nhau.\nMột lần, người vợ nhầm Lang là chồng nên vui vẻ đón tiếp. Tân trở về nhìn thấy, hiểu lầm rằng em mình và vợ không giữ ý, liền buồn bực. Lang không biết vì sao anh lạnh nhạt, tủi thân bỏ nhà đi. Chàng đi mãi đến bờ sông, ngồi khóc rồi hóa thành một tảng đá.\nTân đi tìm em. Đến bờ sông, chàng thấy tảng đá lạ, thương em quá nên ngồi bên khóc. Tân hóa thành cây cau mọc thẳng bên tảng đá. Người vợ lần theo dấu chân hai anh em, đến nơi, ôm lấy thân cây mà khóc rồi hóa thành dây trầu xanh quấn quanh cây cau.\nSau này, người dân lấy lá trầu têm với cau và một chút vôi. Khi nhai, trầu cau hòa quyện thành màu đỏ thắm. Từ đó, trầu cau trở thành biểu tượng của tình nghĩa anh em, tình vợ chồng và sự gắn bó trong phong tục Việt Nam.',meaning:'Truyện nhắc về tình thân, lòng thủy chung và sự cần thiết phải tin tưởng, trò chuyện với nhau.'},
      {title:'Sọ Dừa',text:'Ngày xưa, có hai vợ chồng nghèo hiền lành làm thuê cho một phú ông. Một hôm, người vợ uống nước trong chiếc sọ dừa rồi mang thai. Ít lâu sau, bà sinh ra một đứa bé tròn lông lốc như chiếc sọ dừa, không có tay chân. Bà buồn rầu, nhưng đứa bé cất tiếng xin mẹ đừng vứt mình đi. Bà đặt tên con là Sọ Dừa và hết lòng nuôi nấng.\nKhi lớn lên, Sọ Dừa xin mẹ cho đi chăn bò thuê. Cậu chăn bò rất giỏi, ngày nào đàn bò cũng no căng. Ba cô con gái của phú ông thay nhau mang cơm ra đồng. Hai cô chị thường chê cười Sọ Dừa, còn cô út hiền lành, thấy cậu chăm chỉ nên đối xử tử tế. Một hôm, cô út nhìn thấy một chàng trai khôi ngô thổi sáo bên đàn bò, rồi chàng biến mất. Cô giữ kín điều mình thấy.\nSọ Dừa nhờ mẹ sang hỏi cưới cô út. Phú ông thách cưới rất nhiều lễ vật, nhưng đến ngày hẹn, nhà Sọ Dừa có đủ mọi thứ. Trong ngày cưới, Sọ Dừa hiện nguyên hình thành chàng trai tuấn tú. Hai chị ghen tức, còn cô út vui mừng vì đã tin vào tấm lòng tốt.\nSọ Dừa chăm học, thi đỗ trạng nguyên rồi được vua cử đi sứ. Trước khi đi, chàng đưa cho vợ một hòn đá lửa, con dao và hai quả trứng gà, dặn nàng giữ bên mình. Hai cô chị vì ghen ghét đã đẩy em xuống biển. Cô út dùng những vật ấy thoát nạn, được gà và đá lửa giúp đỡ. Khi Sọ Dừa trở về, vợ chồng đoàn tụ. Hai chị xấu hổ bỏ đi. Từ đó, hai người sống hạnh phúc, còn mọi người hiểu rằng không nên đánh giá ai chỉ qua vẻ bề ngoài.',meaning:'Truyện khuyên ta không chê bai vẻ ngoài, hãy nhìn vào tấm lòng và cách sống của mỗi người.'},
      {title:'Cây khế',text:'Ngày xưa, có hai anh em mồ côi cha mẹ. Người anh tham lam, chiếm hết nhà cửa ruộng vườn, chỉ chia cho em một túp lều nhỏ và cây khế ở góc vườn. Người em hiền lành, chăm chỉ, ngày ngày làm lụng và chăm sóc cây khế.\nĐến mùa, cây khế sai trĩu quả. Một hôm có chim lớn bay đến ăn khế. Người em buồn rầu nói rằng đó là tài sản duy nhất của mình. Chim liền đáp: “Ăn một quả, trả cục vàng. May túi ba gang, mang đi mà đựng.” Người em may chiếc túi nhỏ đúng lời dặn. Chim chở em ra đảo, em chỉ lấy vừa đủ vàng trong túi rồi trở về. Nhờ vậy, người em có cuộc sống khá giả nhưng vẫn hiền hậu, hay giúp đỡ mọi người.\nNghe chuyện, người anh đòi đổi toàn bộ nhà cửa lấy cây khế. Đến mùa, chim lại đến ăn quả và nói câu cũ. Người anh may chiếc túi thật lớn, chất đầy vàng bạc. Trên đường bay về, túi quá nặng, chim mỏi cánh; người anh rơi xuống biển và mất hết số vàng.\nNgười em nghe tin vẫn thương anh và tiếp tục sống tử tế. Câu chuyện nhắc rằng lòng tham có thể khiến ta mất cả những điều quý giá, còn sự chăm chỉ và biết đủ đem lại bình yên.',meaning:'Truyện nhắc chúng ta chăm chỉ, biết đủ và không tham lam.'},
      {title:'Thạch Sanh',text:'Ngày xưa, ở một ngôi làng nọ có chàng tiều phu tên là Thạch Sanh sống một mình dưới gốc đa. Chàng mồ côi từ nhỏ nhưng khỏe mạnh, thật thà và tốt bụng. Một hôm, chàng kết bạn với Lý Thông, người bán rượu trong làng. Lý Thông thấy Thạch Sanh khỏe, liền rủ chàng về ở cùng nhà.\nTrong vùng có một con chằn tinh thường bắt người. Đến lượt Lý Thông phải nộp mạng, hắn lừa Thạch Sanh đi thay. Thạch Sanh dũng cảm chiến đấu, diệt được chằn tinh và mang đầu về. Lý Thông lại lừa chàng trốn đi, rồi nhận công với nhà vua. Thạch Sanh không giận dữ, trở về sống yên lặng dưới gốc đa.\nSau đó, công chúa bị đại bàng khổng lồ bắt đi. Thạch Sanh lần theo dấu vết, cứu được công chúa khỏi hang sâu. Lý Thông tiếp tục tìm cách cướp công và lấp cửa hang nhốt chàng. Nhờ cây đàn thần và lòng ngay thẳng, Thạch Sanh được giải oan. Nhà vua biết sự thật, trừng phạt kẻ gian và gả công chúa cho chàng.\nKhi quân các nước kéo đến, Thạch Sanh không muốn gây chiến. Chàng gảy đàn thần khiến quân lính nhớ nhà, xin rút lui. Niêu cơm nhỏ của chàng ăn mãi không hết, mọi người cùng vui vẻ trở về. Thạch Sanh sống nhân hậu, dùng tài năng để bảo vệ mọi người và đem lại hòa bình.',meaning:'Truyện ca ngợi lòng dũng cảm, sự thật thà và tấm lòng nhân hậu.'},
      {title:'Tấm Cám — bản kể nhẹ nhàng cho bé',text:'Ngày xưa, có cô Tấm hiền lành sống cùng mẹ kế và cô em Cám. Tấm chăm chỉ làm việc nhà, còn Cám thường được mẹ chiều chuộng. Một hôm, hai chị em đi bắt tép. Tấm bắt được đầy giỏ, nhưng Cám lừa chị để lấy hết. Tấm buồn, ngồi khóc bên bờ ao. Bụt hiện lên, giúp Tấm tìm thấy một chú cá bống nhỏ. Tấm đem cá về nuôi, ngày ngày chia cơm cho cá.\nMẹ con Cám biết chuyện, lừa Tấm đi làm xa rồi bắt cá bống. Bụt lại giúp Tấm nhặt xương cá, cất vào bốn chiếc lọ dưới chân giường. Đến ngày hội lớn, Tấm không được đi. Bụt hóa phép giúp cô có áo đẹp, giày thêu và ngựa để đến hội. Trên đường đi, Tấm đánh rơi một chiếc giày. Nhà vua nhặt được, truyền tìm người vừa chiếc giày ấy. Tấm thử vừa, được đón vào cung làm hoàng hậu.\nDù sống trong cung, Tấm vẫn nhớ nhà. Cô trở về thăm gia đình và nhiều lần gặp khó khăn do mẹ con Cám gây ra. Mỗi lần như vậy, nhờ lòng kiên trì, sự giúp đỡ kỳ diệu và những người yêu quý mình, Tấm lại tìm được cách vượt qua. Cuối cùng, nhà vua biết rõ mọi chuyện, bảo vệ Tấm và không để ai đối xử bất công với cô nữa.\nTấm tha thứ cho em gái khi Cám biết nhận lỗi. Mẹ con Cám phải sống tử tế và tự lao động. Tấm cùng nhà vua chăm lo cho dân chúng. Từ đó, mọi người quý mến nàng vì lòng nhân hậu, chăm chỉ và biết tha thứ. Đây là bản kể đã được làm nhẹ nhàng cho trẻ nhỏ; truyện dân gian có nhiều dị bản khác nhau.',meaning:'Bản kể dành cho bé nhấn mạnh lòng nhân hậu, sự chăm chỉ, công bằng và biết sửa sai.'}
    ]
  };
const riddleData=`
Cái bút|Mình dài dài, áo nhiều màu, giúp bạn viết chữ mỗi ngày.|Đó là cái bút.|do-vat
Cái thước|Thân em thẳng tắp, giúp đo, giúp kẻ, học trò thường có trong cặp.|Đó là cái thước.|do-vat
Cục tẩy|Mình ăn mất nét bút chì, giúp trang vở sạch tinh.|Đó là cục tẩy.|do-vat
Quyển sách|Mở ra có chữ, có tranh, khép lại nằm ngoan trên bàn.|Đó là quyển sách.|do-vat
Cái cặp|Sáng theo bé đến lớp, chiều lại cùng bé về nhà, đựng sách vở bên trong.|Đó là cái cặp sách.|do-vat
Cái kéo|Hai lưỡi sáng choang, gặp giấy là cắt, gặp vải cũng làm việc.|Đó là cái kéo.|do-vat
Cái bàn|Bốn chân đứng vững, mặt phẳng rộng rãi, là nơi bé học bài.|Đó là cái bàn.|do-vat
Cái ghế|Có lưng mà chẳng biết nằm, có chân mà chẳng biết đi, để bé ngồi học.|Đó là cái ghế.|do-vat
Cái bảng|Mặt đen hoặc trắng, cô viết lên đó, cả lớp cùng nhìn.|Đó là cái bảng.|do-vat
Viên phấn|Thân trắng nhỏ xinh, viết trên bảng rồi dần dần ngắn lại.|Đó là viên phấn.|do-vat
Đồng hồ|Mặt tròn có kim, không biết nói mà vẫn cho ta biết giờ.|Đó là chiếc đồng hồ.|do-vat
Cái ô|Trời mưa che đầu, trời nắng cũng giúp bé mát hơn.|Đó là cái ô.|do-vat
Cái gối|Đêm đêm kê dưới đầu, mềm êm ru bé vào giấc ngủ.|Đó là cái gối.|gia-dinh
Cái chăn|Mùa đông đắp ấm, mùa hè gấp gọn, luôn nằm trên giường.|Đó là cái chăn.|gia-dinh
Cái giường|Bốn chân nhưng chẳng bước đi, ban đêm là nơi bé ngủ.|Đó là cái giường.|gia-dinh
Cái lược|Răng nhiều mà chẳng biết nhai, giúp tóc ngay ngắn mỗi ngày.|Đó là cái lược.|gia-dinh
Bàn chải đánh răng|Có nhiều sợi lông nhỏ, sáng tối giúp răng sạch bóng.|Đó là bàn chải đánh răng.|gia-dinh
Cái bát|Miệng tròn bụng rỗng, đựng cơm canh cho bé ăn.|Đó là cái bát.|gia-dinh
Cái thìa|Thân nhỏ, đầu lõm, giúp múc canh và xúc cơm.|Đó là cái thìa.|gia-dinh
Cái quạt|Có cánh mà chẳng phải chim, quay vòng tạo gió mát.|Đó là cái quạt.|do-vat
Con mèo|Kêu meo meo, thích bắt chuột, bàn chân đi rất nhẹ.|Đó là con mèo.|con-vat
Con chó|Giữ nhà rất giỏi, gặp người quen thường vẫy đuôi mừng.|Đó là con chó.|con-vat
Con gà|Sáng sớm gáy ò ó o, trên đầu có chiếc mào đỏ.|Đó là con gà trống.|con-vat
Con vịt|Bơi dưới ao, kêu cạc cạc, chân có màng.|Đó là con vịt.|con-vat
Con cá|Sống dưới nước, có vây có đuôi, bơi lượn rất nhanh.|Đó là con cá.|con-vat
Con chim|Có cánh biết bay, làm tổ trên cây và hót líu lo.|Đó là con chim.|con-vat
Con bướm|Lúc nhỏ là sâu, lớn lên có cánh nhiều màu bay quanh hoa.|Đó là con bướm.|con-vat
Con ong|Bay đi tìm mật, làm ra mật ngọt, có chiếc kim nhỏ.|Đó là con ong.|con-vat
Con kiến|Bé tí xíu nhưng rất chăm, thường đi thành hàng dài.|Đó là con kiến.|con-vat
Con voi|Tai to như quạt, mũi dài như vòi, thân hình thật lớn.|Đó là con voi.|con-vat
Con hươu cao cổ|Cổ rất dài, thích ăn lá cây trên ngọn cao.|Đó là con hươu cao cổ.|con-vat
Con thỏ|Tai dài, mắt đỏ, thích ăn cà rốt và chạy rất nhanh.|Đó là con thỏ.|con-vat
Con ốc sên|Nhà mang trên lưng, đi chậm rì rì nhưng không lạc đường.|Đó là con ốc sên.|con-vat
Con tằm|Ăn lá dâu, nhả tơ trắng, làm nên sợi mềm.|Đó là con tằm.|con-vat
Mặt trời|Ban ngày tỏa ánh sáng, sưởi ấm muôn loài.|Đó là mặt trời.|thien-nhien
Mặt trăng|Ban đêm tròn hoặc khuyết, nhẹ nhàng soi sáng bầu trời.|Đó là mặt trăng.|thien-nhien
Ngôi sao|Lấp lánh trên trời đêm, có rất nhiều bạn nhỏ xung quanh.|Đó là ngôi sao.|thien-nhien
Cầu vồng|Sau cơn mưa xuất hiện, cong cong với nhiều màu rực rỡ.|Đó là cầu vồng.|thien-nhien
Hạt mưa|Từ trên trời rơi xuống, làm cây cối tươi xanh.|Đó là hạt mưa.|thien-nhien
Gió|Không nhìn thấy hình, nhưng làm lá cây rung rinh và tóc bay.|Đó là gió.|thien-nhien
Sấm|Mưa giông đến, tiếng vang ầm ầm trên bầu trời.|Đó là tiếng sấm.|thien-nhien
Tia chớp|Vụt sáng trên trời trong chốc lát rồi biến mất.|Đó là tia chớp.|thien-nhien
Đám mây|Trắng trắng bồng bềnh, trôi lững lờ trên bầu trời.|Đó là đám mây.|thien-nhien
Dòng sông|Chảy quanh co, mang nước đi xa, hai bên thường có bờ.|Đó là dòng sông.|thien-nhien
Quả chuối|Cong cong như chiếc thuyền nhỏ, áo vàng khi chín.|Đó là quả chuối.|cay-qua
Quả cam|Áo màu da cam, bóc ra có nhiều múi mọng nước.|Đó là quả cam.|cay-qua
Quả dưa hấu|Vỏ xanh, ruột đỏ, hạt đen, mùa hè ăn rất mát.|Đó là quả dưa hấu.|cay-qua
Quả dừa|Áo xanh hoặc nâu, bên trong có nước ngọt và cùi trắng.|Đó là quả dừa.|cay-qua
Quả na|Vỏ có nhiều mắt, ruột trắng, hạt đen, vị ngọt thơm.|Đó là quả na.|cay-qua
Quả mít|Gai ngoài vỏ, múi vàng thơm, hạt to bên trong.|Đó là quả mít.|cay-qua
Quả xoài|Khi xanh chua giòn, khi chín vàng thơm và ngọt.|Đó là quả xoài.|cay-qua
Quả dứa|Mắt nhiều bên ngoài, ruột vàng thơm, còn gọi là quả thơm.|Đó là quả dứa.|cay-qua
Bông hoa|Có cánh nhiều màu, tỏa hương thơm, thường được tặng trong ngày vui.|Đó là bông hoa.|cay-qua
Cây tre|Thân cao chia đốt, lá dài, thường mọc thành bụi xanh.|Đó là cây tre.|cay-qua
Cây lúa|Lớn lên cho hạt gạo trắng, nuôi sống bao người.|Đó là cây lúa.|cay-qua
Cây nấm|Mọc sau mưa, có mũ tròn, nhiều loại dùng làm thức ăn.|Đó là cây nấm.|cay-qua
Mẹ|Người sinh ra bé, luôn yêu thương và chăm sóc bé mỗi ngày.|Đó là mẹ.|gia-dinh
Bố|Người thường làm việc chăm chỉ, bảo vệ và dạy bé điều hay.|Đó là bố.|gia-dinh
Ông|Tóc bạc hiền từ, hay kể chuyện ngày xưa cho các cháu nghe.|Đó là ông.|gia-dinh
Bà|Thường nấu món ngon, kể chuyện cổ tích và ôm bé thật ấm.|Đó là bà.|gia-dinh
Ngôi nhà|Nơi cả gia đình sum họp, có cửa ra vào và mái che.|Đó là ngôi nhà.|gia-dinh
Chiếc khăn|Nhỏ mềm, dùng lau mặt lau tay, thường được gấp ngay ngắn.|Đó là chiếc khăn.|gia-dinh
Xà phòng|Gặp nước tạo bọt, giúp rửa tay sạch sẽ thơm tho.|Đó là xà phòng.|gia-dinh
Tủ lạnh|Bên trong mát lạnh, giúp giữ thức ăn và nước uống lâu hơn.|Đó là tủ lạnh.|gia-dinh
Cái nồi|Có quai có vung, dùng nấu cơm, nấu canh cho cả nhà.|Đó là cái nồi.|gia-dinh
Chiếc dép|Có đôi đi cùng nhau, giúp bàn chân sạch khi bước đi.|Đó là đôi dép.|gia-dinh
Cái mũ|Đội trên đầu để che nắng, che mưa và làm bé thêm xinh.|Đó là cái mũ.|gia-dinh
Cái khóa|Bé bé mà giữ cửa, chỉ mở khi có chìa đúng.|Đó là cái khóa.|do-vat
Cái bút chì|Thân dài nho nhỏ, Viết chữ thật đều, Mòn dần theo tháng, Bạn học thân yêu. Đó là gì?|Đó là cái bút chì.|do-vat
Cái bàn học|Bốn chân đứng vững, Mặt phẳng ở trên, Bé ngồi học bài, Sách vở đặt lên. Đó là gì?|Đó là cái bàn học.|do-vat
Cái thước kẻ|Thân thẳng đo dài, Không nói một lời, Chia từng xăng-ti-mét, Giúp bé vẽ ngời. Đó là gì?|Đó là cái thước kẻ.|do-vat
Cái đèn pin|Bé bấm một cái, Ánh sáng bừng lên, Soi đường lúc tối, Nhỏ gọn trong tay. Đó là gì?|Đó là cái đèn pin.|do-vat
Cái bình giữ nhiệt|Thân tròn giữ nóng, Có nắp thật khít, Mang nước theo bé, Suốt buổi đi chơi. Đó là gì?|Đó là cái bình giữ nhiệt.|do-vat
Cái áo mưa|Khoác lên người bé, Trời mưa chẳng ướt, Có tay có mũ, Gấp gọn vào túi. Đó là gì?|Đó là cái áo mưa.|do-vat
Cái thùng rác|Miệng luôn há rộng, Nuốt giấy vụn thôi, Đứng ở góc lớp, Giữ lớp sạch tươi. Đó là gì?|Đó là cái thùng rác.|do-vat
Cái ổ khóa|Ở cùng chìa nhỏ, Giữ cửa thật yên, Xoay đúng một lượt, Mở ra liền liền. Đó là gì?|Đó là cái ổ khóa.|do-vat
Cái hộp đựng thức ăn|Đi cùng hộp cơm, Giữ thức ăn ngon, Có nắp đậy kín, Bé mang đến trường. Đó là gì?|Đó là cái hộp đựng thức ăn.|do-vat
Cái đồng hồ báo thức|Không nói chẳng cười, Mà nghe tiếng gọi, Đổ chuông đúng giờ, Nhắc bé thức dậy. Đó là gì?|Đó là cái đồng hồ báo thức.|do-vat
Cái máy tính|Màn hình sáng nhỏ, Có phím có chuột, Giúp bé học bài, Tìm điều mới mẻ. Đó là gì?|Đó là cái máy tính.|do-vat
Cái keo dán|Thân mềm màu trắng, Có nắp xanh xanh, Bóp ra một chút, Dán giấy thật nhanh. Đó là gì?|Đó là cái keo dán.|do-vat
Cái cặp sách|Vai mang hai quai, Bụng chứa sách vở, Theo bé đến lớp, Mỗi sáng mỗi trưa. Đó là gì?|Đó là cái cặp sách.|do-vat
Cái bảng lớp|Mình vuông trắng phẳng, Cô viết thật mau, Chữ và hình vẽ, Hiện trước mắt nhau. Đó là gì?|Đó là cái bảng lớp.|do-vat
Nước đá|Nước để trong ngăn đá tủ lạnh sẽ chuyển thành gì?|Đó là nước đá.|thien-nhien
Cây đinh|Cái gì có đầu mà không có tóc?|Đó là cây đinh.|do-vat
Chiếc giày|Cái gì có lưỡi mà không nói được?|Đó là chiếc giày.|do-vat
Cái hố|Cái gì càng lấy đi thì càng to?|Đó là cái hố.|do-vat
Bản đồ|Cái gì có thành phố, sông, núi nhưng không có người, nước hay cây?|Đó là bản đồ.|do-vat
Con tem|Cái gì đi khắp thế giới nhưng luôn ở một góc?|Đó là con tem.|do-vat
Cuốn từ điển|Cái gì không có miệng nhưng có thể trả lời con khi con hỏi?|Đó là cuốn từ điển.|do-vat
Quyển sổ|Cái gì càng dùng để ghi nhớ thì càng có nhiều trang ghi chép?|Đó là quyển sổ.|do-vat
Găng tay|Cái gì có 4 ngón tay thậm chí có cả ngón cái nhưng nó không sống?|Đó là găng tay.|do-vat
Than|Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?|Đó là than.|do-vat
Quả báo|Quả gì ai cũng sợ ăn trúng?|Đó là quả báo.|cay-qua
Con đường|Con gì không mắt, không tai, có đầu có cuối ai ai cũng nhờ?|Đó là con đường.|thien-nhien
Hoa mai|Hoa gì không phải hôm nay. (Chơi chữ)?|Đó là hoa mai.|cay-qua
Con giáp|Con gì đầu chuột, đuôi heo?|Đó là con giáp.|con-vat
Con la|Con gì sinh ra đã ồn ào?|Đó là con la.|con-vat
Con so|Theo phong tục dân gian, con đầu lòng gọi là con gì?|Đó là con so.|gia-dinh
Hoa giấy|Hoa gì đủ màu đủ sắc, lấy tên đồ dùng của học sinh (đố chữ)?|Đó là hoa giấy.|cay-qua
Con người|Cái gì ban ngày đi bốn chân, ban đêm đi hai chân, đến chiều tối lại đi ba chân?|Đó là con người.|con-vat
Con tê giác|Con gì có sừng mà không phải bò?|Đó là con tê giác.|con-vat
Con ốc|Con gì có sừng mà không húc?|Đó là con ốc.|con-vat
Con cừu|Con gì có lông trắng mà kêu be be?|Đó là con cừu.|con-vat
Con gấu trúc|Con gì có lông đen trắng mà ăn lá tre?|Đó là con gấu trúc.|con-vat
Con chuột túi|Con gì có túi trước bụng?|Đó là con chuột túi.|con-vat
Con gà trống|Con gì có mào đỏ mà gáy ò ó o?|Đó là con gà trống.|con-vat
Con vẹt|Con gì có lông mà biết nói tiếng người?|Đó là con vẹt.|con-vat
Sầu riêng|Quả gì đội mũ sắt, mặc áo giáp?|Đó là sầu riêng.|thien-nhien
Mưa|Cái gì rơi xuống mà không vỡ?|Đó là mưa.|thien-nhien
Bóng con voi|Cái gì có kích thước bằng con voi nhưng chẳng nặng gram nào cả?|Đó là bóng con voi.|thien-nhien
Bánh chưng|Cái gì trong trắng ngoài xanh trồng đậu trồng hành rồi thả heo vào?|Đó là bánh chưng.|thien-nhien
Sao chổi|Không có cánh mà lại có đuôi Những toan dọn cả bầu trời sạch trong (Đố là gì?)|Đó là sao chổi.|thien-nhien
Vết chân chim|Cái gì của con chim mà lại có trên cơ thể con người?|Đó là vết chân chim.|thien-nhien
Quả bóng bay|Cái gì càng to càng dễ vỡ?|Đó là quả bóng bay.|cay-qua
Con rết bị đau chân|Câu đố mẹo có đáp án: Con gì còn đau khổ hơn hươu cao cổ bị viêm họng?|Đó là con rết bị đau chân.|con-vat
Chiếc compa|Vào trong hộp thì nằm, khi dùng thì đứng. Là cái gì?|Đó là chiếc compa.|do-vat
Cái diều|Đố gì có đuôi mà không phải con vật, bay cao trong gió?|Đó là cái diều.|do-vat
Cái ấm|Đố gì có bụng mà không ăn, có miệng mà không nói, chứa được nước?|Đó là cái ấm.|do-vat
Cái kim|Đố gì có rất nhiều “mắt” nhưng không nhìn thấy, dùng để vá áo?|Đó là cái kim.|do-vat
Quyển vở ô li|Đố gì có rất nhiều đường nhưng không có xe cộ?|Đó là quyển vở ô li.|do-vat
Cái neo|Đố gì khi dùng thì ném đi, khi không dùng lại kéo về?|Đó là cái neo.|do-vat
Con dơi|Đố gì ban ngày ngủ, ban đêm bay đi bắt muỗi?|Đó là con dơi.|con-vat
Bức thư|Đố gì không có chân mà đi khắp thế giới, không có miệng mà kể chuyện?|Đó là bức thư.|do-vat
3 người con|Một gia đình có 2 con trai. Mỗi bạn trai có cùng một chị gái. Gia đình có mấy người con?|3 người con. Gia đình có 2 con trai và 1 chị gái, tổng cộng 3 người con.|gia-dinh
Bằng nhau|1 kg sắt và 1 kg bông, vật nào nặng hơn?|Bằng nhau. 1 kg luôn bằng 1 kg, dù vật liệu khác nhau.|gia-dinh
Cả 12 tháng|Tháng nào trong năm cũng có ít nhất 28 ngày?|Cả 12 tháng. Mọi tháng đều có từ 28 ngày trở lên.|gia-dinh
3 người|Ông, bố và con cùng đi câu. Mỗi người câu được một con cá, tổng cộng có 3 con cá. Có mấy người đi câu?|3 người. Có 3 người: ông, bố và con.|gia-dinh
10|Có 5 bạn bắt tay nhau, mỗi cặp bạn chỉ bắt tay một lần. Có tất cả bao nhiêu cái bắt tay?|10. 4 + 3 + 2 + 1 = 10 cái bắt tay.|gia-dinh
9 con|Một đàn có 17 con cừu. Tất cả trừ 9 con chạy ra ngoài. Còn lại mấy con?|9 con. Có 9 con cừu còn lại.|gia-dinh
2 quả|Trên bàn có 3 quả táo. Con lấy đi 2 quả. Con đang có mấy quả táo?|2 quả. Con đã lấy 2 quả, nên con đang có 2 quả.|gia-dinh
9 quả|3 con gà đẻ 3 quả trứng trong 3 ngày. Nếu mọi con gà đẻ đều như nhau, 9 con gà đẻ bao nhiêu quả trứng trong 3 ngày?|9 quả. Số trứng tăng gấp 3: 3 × 3 = 9 quả.|gia-dinh
Con|Con đang lái một xe buýt. Ở trạm đầu có 4 người lên xe, trạm sau 2 người xuống. Ai đang lái xe?|Con. Đề bài nói “Con đang lái”, nên người lái là con.|gia-dinh
Có 3 người: ông, bố và con|Có 2 người cha và 2 người con cùng ăn 3 cái bánh, mỗi người ăn đúng 1 cái. Điều này có thể xảy ra như thế nào?|Có 3 người: ông, bố và con.|gia-dinh
Thứ Sáu|Hôm nay là thứ Ba. Sau 10 ngày nữa là thứ mấy?|Thứ Sáu. Sau một tuần vẫn là thứ Ba, thêm 3 ngày là thứ Sáu.|gia-dinh
2 lần|Một chiếc đồng hồ đúng giờ nhưng đã dừng hẳn. Trong 24 giờ, nó chỉ đúng mấy lần?|2 lần. Kim đứng yên vẫn trùng giờ thật hai lần mỗi ngày.|gia-dinh
12 bạn|An đứng thứ 7 từ đầu hàng và thứ 6 từ cuối hàng. Hàng có tất cả bao nhiêu bạn?|12 bạn. 7 + 6 − 1 = 12 bạn.|gia-dinh
3 bút|Có một cái hộp đựng 6 bút đỏ và 6 bút xanh. Không nhìn vào hộp, con cần lấy ít nhất mấy bút để chắc chắn có 2 bút cùng màu?|3 bút. Với 2 màu, lấy 3 bút chắc chắn có hai bút cùng màu.|gia-dinh
Mai|Ba bạn Mai, Nam, Linh xếp hàng. Linh đứng trước Mai, Mai đứng trước Nam. Ai đứng giữa?|Mai. Thứ tự là Linh, Mai, Nam nên Mai đứng giữa.|gia-dinh
Gà trống không đẻ trứng|Một con gà trống đẻ một quả trứng trên mái nhà. Trứng sẽ lăn về bên nào?|Gà trống không đẻ trứng.|gia-dinh
3 cúc|Một chiếc áo có 5 cúc. Nếu cài 2 cúc thì còn mấy cúc chưa cài?|3 cúc. 5 − 2 = 3 cúc chưa cài.|gia-dinh
5 người con|Một người có 4 chị em gái. Mỗi chị em gái có một người anh trai chung. Gia đình có mấy người con?|5 người con. Có 4 con gái và 1 con trai, tổng 5 người con.|gia-dinh
5 phần|Một cái bánh được cắt thành 8 phần bằng nhau. Ăn 3 phần. Còn lại mấy phần?|5 phần. 8 − 3 = 5 phần bánh.|gia-dinh
14|Lan có nhiều hơn Mai 6 nhãn vở. Mai có 8 nhãn vở. Lan có bao nhiêu nhãn vở?|14. 8 + 6 = 14 nhãn vở.|gia-dinh
Một động vật|Nếu tất cả các con mèo đều là động vật, và Miu là một con mèo, Miu là gì?|Một động vật.|gia-dinh
A, B, C hoặc C, B, A|Ba cuốn sách A, B, C xếp trên kệ. A không đứng cạnh C. B phải đứng ở giữa. Thứ tự đúng là gì?|A, B, C hoặc C, B, A.|gia-dinh
14 ngày|Một tuần có 7 ngày. Hai tuần có bao nhiêu ngày?|14 ngày. 7 × 2 = 14 ngày.|gia-dinh
6|Sáu bạn ngồi quanh một bàn tròn. Mỗi bạn bắt tay với đúng hai bạn ngồi cạnh mình. Có tất cả bao nhiêu cái bắt tay?|6. 6 bạn, mỗi bạn có 2 cái bắt tay: 6 × 2 : 2 = 6.|gia-dinh
200 g|Một chiếc cân có hai đĩa. Đặt 2 quả cam mỗi quả 100 g lên một bên. Bên kia cần bao nhiêu g để cân bằng?|200 g. 100 g + 100 g = 200 g.|gia-dinh
Hộp xanh|Có 3 chiếc hộp: hộp đỏ, xanh, vàng. Hộp vàng ở đầu hàng, hộp đỏ ở cuối hàng. Hộp nào ở giữa?|Hộp xanh. Hộp vàng ở đầu, hộp đỏ ở cuối nên hộp xanh ở giữa.|gia-dinh
Số 12|Một chiếc đồng hồ chỉ 6 giờ. Kim phút đang chỉ số nào?|Số 12. 0 phút tương ứng kim phút chỉ số 12.|gia-dinh
463|Một số có 3 chữ số. Hàng trăm là 4, hàng đơn vị là 3; hàng chục gấp đôi hàng đơn vị. Số đó là bao nhiêu?|463. Số gồm 4 trăm, 6 chục, 3 đơn vị là 463.|gia-dinh
Bút chì|Cái gì càng gọt càng ngắn?|Bút chì. Mỗi lần gọt, bút chì ngắn hơn.|gia-dinh
Cuốn lịch|Cái gì có nhiều trang mà không phải là quyển sách?|Cuốn lịch. Cuốn lịch có nhiều trang để xem ngày tháng.|gia-dinh
Đồng hồ|Cái gì có kim nhưng không dùng để khâu?|Đồng hồ. Đồng hồ kim dùng kim giờ và kim phút.|gia-dinh
Cái lược|Cái gì có răng nhưng không cắn được?|Cái lược. Cái lược có răng lược nhưng không cắn được.|gia-dinh
Cái chai|Cái gì có cổ nhưng không có đầu?|Cái chai. Cái chai có cổ chai nhưng không có đầu.|gia-dinh
Cái bàn|Cái gì có chân nhưng không biết đi?|Cái bàn. Cái bàn có chân bàn nhưng không tự đi được.|gia-dinh
Củ khoai tây|Cái gì có mắt nhưng không nhìn được?|Củ khoai tây.|gia-dinh
Cánh cửa|Cái gì có cánh mà không bay?|Cánh cửa. Cánh cửa mở ra đóng vào nhưng không bay.|gia-dinh
Tuổi của con|Cái gì luôn đi lên nhưng không bao giờ đi xuống?|Tuổi của con.|gia-dinh
Lời hứa|Cái gì có thể giữ được mà không cần cầm bằng tay?|Lời hứa. Ta “giữ lời hứa” bằng hành động.|gia-dinh
Hộp bút|Cái gì cần được mở ra trước khi con có thể dùng bút chì mới?|Hộp bút. Cần mở hộp bút để lấy bút chì.|gia-dinh
Mái hiên|Khi trời mưa mà không có ô, con có thể đứng dưới đâu để tránh ướt?|Mái hiên. Mái hiên che mưa cho người đứng bên dưới.|gia-dinh
Khăn lau|Cái gì càng lau càng ướt?|Khăn lau. Khăn lau càng dùng để lau nước thì càng ướt.|gia-dinh
Quyển sách|Cái gì có thể mở nhưng không phải cửa?|Quyển sách. Quyển sách có thể được mở để đọc.|gia-dinh
Nước|Cái gì có thể chạy nhưng không có chân?|Nước. Nước chảy như đang “chạy” nhưng không có chân.|gia-dinh
Thời gian|Cái gì có thể bay nhưng không có cánh?|Thời gian. Ta hay nói “thời gian bay nhanh”.|gia-dinh
Lời hứa|Cái gì có thể vỡ mà không cần làm rơi?|Lời hứa. Ta có thể phá vỡ lời hứa mà không làm rơi vật gì.|gia-dinh
Tương lai|Cái gì luôn ở phía trước con nhưng con không thể nhìn thấy trực tiếp?|Tương lai. Tương lai ở phía trước nhưng chưa xảy ra.|gia-dinh
Lịch học|Cái gì có thể đầy nhưng không phải cái cốc?|Lịch học. Lịch học có thể đầy các hoạt động.|gia-dinh
Niềm vui|Cái gì càng chia sẻ thì càng có nhiều?|Niềm vui. Chia sẻ niềm vui thường làm mọi người vui hơn.|gia-dinh
4 lớp|Có một tờ giấy, con gấp đôi hai lần. Tờ giấy có bao nhiêu lớp chồng lên nhau ở phần giữa?|4 lớp. Lần đầu: 2 lớp; lần thứ hai: 4 lớp.|gia-dinh
Công tắc đèn|Cái gì có thể làm căn phòng sáng lên dù rất nhỏ?|Công tắc đèn.|gia-dinh
Hàng rào|Cái gì có thể đi vòng quanh nhà nhưng không bước một bước nào?|Hàng rào. Hàng rào bao quanh nhà nhưng không tự bước đi.|gia-dinh
Hình ảnh phản chiếu của con|Cái gì có thể nhìn thấy trong gương nhưng không ở sau lưng gương?|Hình ảnh phản chiếu của con.|gia-dinh
Cầu thang|Cái gì có thể lên xuống nhưng luôn ở đúng một chỗ?|Cầu thang. Cầu thang không di chuyển, người đi lên xuống trên đó.|gia-dinh
Thứ Hai|Một tờ lịch có ghi thứ Hai là ngày 1. Ngày 8 sẽ là thứ mấy?|Thứ Hai. Ngày 8 cách ngày 1 đúng 7 ngày nên cũng là thứ Hai.|gia-dinh
Điện thoại|Cái gì có thể “nói” mà không có miệng khi chuông reo?|Điện thoại. Điện thoại có thể reo và phát lời nói.|gia-dinh
Lời hứa|Cái gì không phải là thức ăn nhưng có thể “nuốt” được trong câu nói “nuốt lời”?|Lời hứa. “Nuốt lời” nghĩa là không giữ lời đã nói.|gia-dinh
2 bậc|Một bạn đi lên 4 bậc cầu thang rồi xuống 2 bậc. So với chỗ bắt đầu, bạn đang cao hơn mấy bậc?|2 bậc. 4 − 2 = 2 bậc.|gia-dinh
Kiến thức|Cái gì có thể được “mở rộng” bằng cách học thêm mỗi ngày?|Kiến thức. Kiến thức tăng lên khi ta học hỏi.|gia-dinh
Ý tưởng|Cái gì có thể được “gieo” nhưng không phải hạt cây?|Ý tưởng. Ta nói “gieo ý tưởng” theo nghĩa tạo cảm hứng ban đầu.|gia-dinh
12 giờ|Một ngày có 24 giờ. Nửa ngày có bao nhiêu giờ?|12 giờ. 24 : 2 = 12 giờ.|gia-dinh
40 m|Trên một con đường có 5 cột đèn, khoảng cách giữa hai cột liền nhau là 10 m. Khoảng cách từ cột đầu đến cột cuối là bao nhiêu?|40 m. Có 4 khoảng: 4 × 10 = 40 m.|gia-dinh
7|Có bao nhiêu hình vuông trong hình?|7. Có 7 hình vuông.|gia-dinh
12 tháng|Trong một năm, có 7 tháng có 31 ngày. Hỏi có bao nhiêu tháng có 28 ngày?|12 tháng.|gia-dinh
10 phút|Nếu mất 10 phút để luộc chín một quả trứng, hỏi cần bao lâu để luộc chín 5 quả trứng?|10 phút.|gia-dinh
3.000 VNĐ|Trong túi bạn có 100.000 VNĐ, bạn mua một món đồ giá 97.000 VNĐ. Hỏi người bán hàng trả lại bạn bao nhiêu tiền?|3.000 VNĐ.|gia-dinh
Không|Một cuốn sách dày 100 trang, bạn mở đến trang giữa. Hỏi đó là trang số bao nhiêu?|Không. Không có một trang duy nhất ở giữa; chính giữa cuốn sách nằm giữa trang 50 và trang 51.|gia-dinh
Người em út tên Nam|Nhà Nam có 4 anh chị em, 3 người lớn tên là Xuân, Hạ, Thu. Đố bạn người em út tên gì?|Người em út tên Nam.|gia-dinh
Ngủ đêm|Bạn có "chiêu" nào để có thể thức trắng 7 ngày mà vẫn không thiếu ngủ?|Ngủ đêm.|gia-dinh
24|Bốn giỏ có số cam bằng nhau, mỗi giỏ 6 quả. Có tất cả bao nhiêu quả cam?|24. 4 × 6 = 24 quả cam.|gia-dinh
11|Minh có 15 chiếc bút chì, tặng bạn 4 chiếc. Minh còn lại bao nhiêu chiếc?|11. 15 − 4 = 11 chiếc bút chì.|gia-dinh
11 giờ 30 phút|Một bộ phim bắt đầu lúc 9 giờ và kéo dài 2 giờ 30 phút. Phim kết thúc lúc nào?|Đó là 11 giờ 30 phút.|gia-dinh
21|Có 3 hàng ghế, mỗi hàng 7 bạn. Có tất cả bao nhiêu bạn?|21. 3 × 7 = 21 bạn.|gia-dinh
9|45 chiếc kẹo được chia đều cho 5 bạn. Mỗi bạn được bao nhiêu chiếc?|9. 45 : 5 = 9 chiếc kẹo.|gia-dinh
28|Một quyển vở giá 7 nghìn đồng. Mua 4 quyển vở hết bao nhiêu nghìn đồng?|28. 7 × 4 = 28 nghìn đồng.|gia-dinh
20 cm|Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông là bao nhiêu?|20 cm. 5 × 4 = 20 cm.|gia-dinh
9|Một nửa của 18 là bao nhiêu?|9. 18 : 2 = 9.|gia-dinh
14|Điền số tiếp theo: 2, 5, 8, 11, ...|Điền số tiếp theo: 2, 5, 8, 11, 14.|gia-dinh
180 phút|3 giờ bằng bao nhiêu phút?|180 phút. 3 × 60 = 180 phút.|gia-dinh
Thứ Bảy|Hôm nay là thứ Hai. Sau 5 ngày nữa là thứ mấy?|Thứ Bảy. Sau thứ Hai 5 ngày là thứ Bảy.|gia-dinh
9|72 chiếc bánh được xếp đều vào 8 hộp. Mỗi hộp có bao nhiêu chiếc?|9. 72 : 8 = 9 chiếc bánh.|gia-dinh
27|Có 4 hộp bút, mỗi hộp 8 chiếc. Dùng hết 5 chiếc. Còn lại bao nhiêu chiếc bút?|27. 4 × 8 = 32; 32 − 5 = 27.|gia-dinh
2 giờ|Quãng đường dài 60 km. Đi với vận tốc 30 km/giờ thì mất bao lâu?|2 giờ. 60 : 30 = 2 giờ.|gia-dinh
10|20% của 50 là bao nhiêu?|10. 20% = 2 × 10%, nên 20% của 50 là 10.|gia-dinh
24 cm²|Một hình chữ nhật dài 8 cm, rộng 3 cm. Diện tích là bao nhiêu?|24 cm². 8 × 3 = 24 cm².|gia-dinh
5|Một phần tư của 20 cái bánh là bao nhiêu cái?|5. 20 : 4 = 5 cái bánh.|gia-dinh
13|Tìm số còn thiếu: ... + 7 = 20.|Tìm số còn thiếu: 13 + 7 = 20.|gia-dinh
5|Một chiếc cặp giá 50 nghìn đồng, giảm giá 10%. Số tiền được giảm là bao nhiêu nghìn đồng?|50 : 10 = 5 nghìn đồng.|gia-dinh
20 cm|Hình chữ nhật dài 6 cm, rộng 4 cm. Chu vi của hình là bao nhiêu?|20 cm. (6 + 4) × 2 = 20 cm.|gia-dinh
10|Trung bình cộng của 8, 10 và 12 là bao nhiêu?|10. (8 + 10 + 12) : 3 = 10.|gia-dinh
125 cm|1 m 25 cm bằng bao nhiêu xăng-ti-mét?|125 cm. 100 cm + 25 cm = 125 cm.|gia-dinh
12|Ba phần năm của 20 là bao nhiêu?|12. 20 : 5 = 4; 4 × 3 = 12.|gia-dinh
3 giờ 15 phút|Bây giờ là 2 giờ 40 phút. Sau 35 phút nữa là mấy giờ?|Đó là 3 giờ 15 phút.|gia-dinh
9|Một số nhân với 3 được 27. Số đó là bao nhiêu?|9. 27 : 3 = 9.|gia-dinh
40|Một món đồ giá 80 nghìn đồng, giảm một nửa. Giá sau giảm là bao nhiêu nghìn đồng?|40. 80 : 2 = 40 nghìn đồng.|gia-dinh
168 giờ|7 ngày có bao nhiêu giờ?|168 giờ. 7 × 24 = 168 giờ.|gia-dinh
27 cm³|Một khối lập phương cạnh 3 cm. Thể tích của khối là bao nhiêu?|27 cm³. 3 × 3 × 3 = 27 cm³.|gia-dinh
20 cm²|Hình tam giác có đáy 8 cm, chiều cao 5 cm. Diện tích là bao nhiêu?|20 cm². 8 × 5 : 2 = 20 cm².|gia-dinh
9|Một phần ba của 27 là bao nhiêu?|9. 27 : 3 = 9.|gia-dinh
24|Một bảng có 6 hàng và 4 cột ô vuông. Có tất cả bao nhiêu ô vuông nhỏ?|24. 6 × 4 = 24 ô vuông nhỏ.|gia-dinh
90|Lan đã làm được ba phần tư của 120 bài. Lan đã làm được bao nhiêu bài?|90. 120 : 4 = 30; 30 × 3 = 90 bài.|gia-dinh
10 tuổi|Nam 7 tuổi. Ba năm nữa Nam bao nhiêu tuổi?|10 tuổi. 7 + 3 = 10 tuổi.|gia-dinh
60 km|Một xe đi 180 km trong 3 giờ. Trung bình mỗi giờ xe đi được bao nhiêu km?|60 km. 180 : 3 = 60 km/giờ.|gia-dinh
11|Có 5 hộp, mỗi hộp nhiều hơn hộp trước 2 viên bi. Hộp đầu có 3 viên. Hộp thứ năm có bao nhiêu viên?|11. Mỗi hộp thêm 2 viên: hộp thứ năm có 11 viên.|gia-dinh
lắng nghe|Khi bạn đang trình bày ý kiến, em nên làm gì để thể hiện sự tôn trọng?|Lắng nghe là cách thể hiện sự tôn trọng và giúp ta hiểu ý kiến của bạn.|gia-dinh
Rễ|Bộ phận nào của cây hút nước và chất dinh dưỡng từ đất?|Rễ hút nước và chất dinh dưỡng từ đất.|thien-nhien
Con gà|Con vật nào sinh ra từ trứng?|Con gà. Gà đẻ trứng; chó, mèo và thỏ sinh con.|con-vat
Mặt Trời|Ban ngày, nguồn sáng tự nhiên lớn nhất của Trái Đất là gì?|Mặt Trời là nguồn sáng và nhiệt chủ yếu của Trái Đất.|thien-nhien
Sau mưa có nắng|Cầu vồng thường xuất hiện khi nào?|Sau mưa có nắng.|thien-nhien
Ếch|Con vật nào có thể sống cả dưới nước lẫn trên cạn?|Ếch sống được ở nước và trên cạn.|con-vat
Diệp lục|Lá cây thường có màu xanh nhờ chất gì?|Diệp lục làm lá có màu xanh và giúp cây tạo chất dinh dưỡng.|thien-nhien
Tai|Cơ quan nào giúp con nghe âm thanh?|Tai tiếp nhận âm thanh.|thien-nhien
Nước, ánh sáng và không khí|Thực vật cần gì để lớn lên khỏe mạnh?|Đó là nước, ánh sáng và không khí.|con-vat
Mặt Trời|Trái Đất quay quanh nguồn sáng nào?|Mặt Trời. Trái Đất quay quanh Mặt Trời.|thien-nhien
Chất rắn, chất lỏng và chất khí|Âm thanh truyền được qua môi trường nào?|Đó là chất rắn, chất lỏng và chất khí.|con-vat
Con bò|Con vật nào ăn cỏ?|Con bò. Bò là động vật ăn cỏ.|con-vat
Mồ hôi|Khi trời rất nóng, cơ thể thường tiết ra gì để làm mát?|Mồ hôi bay hơi giúp cơ thể hạ nhiệt.|con-vat
Nước|Đâu là chất lỏng ở nhiệt độ thường?|Nước là chất lỏng ở nhiệt độ thường.|thien-nhien
Thước nhựa|Vật nào có thể hút các mảnh giấy nhỏ sau khi chà vào tóc?|Thước nhựa sau khi chà có thể tích điện và hút giấy nhỏ.|thien-nhien
Tắt vòi khi đang đánh răng|Đâu là việc giúp tiết kiệm nước?|Đó là tắt vòi khi đang đánh răng.|cay-qua
Con mèo|Con vật nào có vú và nuôi con bằng sữa?|Con mèo. Mèo là động vật có vú.|con-vat
Con cá|Con vật nào thở bằng mang?|Con cá. Cá thở bằng mang.|con-vat
Bay hơi|Khi nước sôi và biến thành hơi, đó là sự chuyển thể nào?|Bay hơi. Nước sôi biến thành hơi nước, đó là bay hơi.|thien-nhien
Màu xanh|Bầu trời ban ngày thường có màu gì khi trời quang?|Màu xanh. Bầu trời quang đãng thường hiện màu xanh.|thien-nhien
Trái Đất|Hành tinh nào là nơi con người đang sinh sống?|Trái Đất. Con người đang sống trên Trái Đất.|thien-nhien
Nhìn thấy sự vật|Mắt cần ánh sáng để làm gì?|Đó là nhìn thấy sự vật.|thien-nhien
Có nước trên mặt đường|Sau cơn mưa, vì sao đường thường trơn?|Có nước trên mặt đường.|thien-nhien
Khí cacbonic|Cây xanh giúp không khí trong lành hơn vì cây hấp thụ khí nào để quang hợp?|Đó là khí cacbonic.|thien-nhien
Ở trong nhà, tránh nơi trống trải|Đâu là việc nên làm khi trời có sấm sét?|Ở trong nhà, tránh nơi trống trải.|con-vat
Hơi nước trong không khí ngưng tụ|Khi để một cốc nước lạnh ngoài trời nóng, giọt nước bám bên ngoài cốc đến từ đâu?|Đó là hơi nước trong không khí ngưng tụ.|con-vat
Con ong|Loài nào thụ phấn cho nhiều loài hoa?|Con ong. Ong mang phấn hoa và giúp nhiều cây sinh sản.|con-vat
Mùa hè|Mùa nào thường có thời tiết nóng nhất ở Việt Nam?|Mùa hè thường nóng nhất.|thien-nhien
Nước và nhiệt độ phù hợp|Để một hạt đậu nảy mầm, hạt cần điều gì quan trọng?|Đó là nước và nhiệt độ phù hợp.|thien-nhien
Ánh sáng Mặt Trời|Đâu là nguồn năng lượng tái tạo?|Đó là ánh sáng Mặt Trời.|thien-nhien
Pin có lắp đúng và còn điện không|Nếu đèn pin không sáng dù đã bật công tắc, việc nào nên kiểm tra trước?|Đó là pin có lắp đúng và còn điện không.|con-vat
Ếch|Loài vật nào có thể biến đổi từ nòng nọc thành con trưởng thành?|Ếch. Nòng nọc lớn lên sẽ biến thành ếch.|con-vat
Dừng lại|Đèn tín hiệu giao thông màu đỏ có nghĩa là gì?|Dừng lại. Đèn đỏ yêu cầu người tham gia giao thông dừng lại.|gia-dinh
Nhiệt kế|Vật nào dùng để đo nhiệt độ cơ thể khi bị sốt?|Nhiệt kế dùng để đo nhiệt độ.|gia-dinh
18 nghìn đồng|Mẹ đưa 50 nghìn đồng để mua đồ giá 32 nghìn đồng. Con phải trả lại bao nhiêu nghìn đồng?|Đó là 18 nghìn đồng.|gia-dinh
Đồng hồ|Dụng cụ nào phù hợp để xem giờ?|Đồng hồ dùng để xem giờ.|gia-dinh
250 ml|Một chai nước có 1 lít. Rót đều vào 4 cốc. Mỗi cốc có bao nhiêu ml?|250 ml. 1 000 : 4 = 250 ml.|gia-dinh
Thùng tái chế|Rác giấy sạch nên bỏ vào đâu nếu trường có thùng phân loại?|Đó là thùng tái chế.|gia-dinh
1 giờ 30 phút|Một buổi học bắt đầu lúc 7 giờ 30 phút và kết thúc lúc 9 giờ. Buổi học kéo dài bao lâu?|Đó là 1 giờ 30 phút.|gia-dinh
Bật đèn và dùng đồ phản quang|Khi đi xe đạp buổi tối, điều gì giúp người khác dễ nhìn thấy con hơn?|Đó là bật đèn và dùng đồ phản quang.|gia-dinh
Kiểm tra kỹ và dùng trước khi hết hạ|Một hộp sữa ghi hạn dùng là hôm nay. Cách xử lý an toàn là gì?|Kiểm tra kỹ và dùng trước khi hết hạn nếu còn bảo quản tốt.|con-vat
8 chỗ|Một xe buýt có 36 chỗ ngồi. Đã có 28 người ngồi. Còn bao nhiêu chỗ trống?|8 chỗ. 36 − 28 = 8 chỗ trống.|gia-dinh
Cất sách vở đúng chỗ|Để bàn học gọn gàng, việc nào nên làm sau khi học xong?|Đó là cất sách vở đúng chỗ.|gia-dinh
Thước kẻ|Dụng cụ nào dùng để đo độ dài của quyển vở?|Thước kẻ dùng để đo độ dài.|gia-dinh
4,5 lít|Một gia đình dùng 3 chai nước, mỗi chai 1,5 lít. Gia đình đã dùng bao nhiêu lít nước?|4,5 lít. 1,5 × 3 = 4,5 lít.|gia-dinh
Rác hữu cơ|Loại rác nào dễ phân hủy từ thức ăn thừa?|Rác hữu cơ. Thức ăn thừa là rác hữu cơ.|gia-dinh
5 phần|Một chiếc bánh được cắt thành 12 phần. Lớp ăn hết 7 phần. Còn lại bao nhiêu phần?|5 phần. 12 − 7 = 5 phần.|gia-dinh
8 học sinh|Một lớp có 32 học sinh. Chia đều thành 4 tổ. Mỗi tổ có bao nhiêu học sinh?|8 học sinh. 32 : 4 = 8 học sinh.|cay-qua
3 ngày|Một cuốn truyện có 84 trang. Con đọc 28 trang mỗi ngày. Sau mấy ngày con đọc xong?|3 ngày. 84 : 28 = 3 ngày.|con-vat
6 nghìn đồng|Một cửa hàng bán 5 quyển vở hết 30 nghìn đồng. Nếu giá như nhau, một quyển giá bao nhiêu nghìn đồng?|Đó là 6 nghìn đồng.|gia-dinh
Số 9|Một đồng hồ chỉ 7 giờ 45 phút. Kim phút gần số nào nhất?|Số 9. Kim phút ở số 9 khi là 45 phút.|gia-dinh
Xe đạp|Loại phương tiện nào không thải khói khi con tự đạp?|Xe đạp không dùng xăng khi di chuyển.|gia-dinh
10 giờ|Một chuyến xe xuất phát lúc 8 giờ 20 phút, đi trong 1 giờ 40 phút. Xe đến nơi lúc nào?|10 giờ. 8 giờ 20 phút + 1 giờ 40 phút = 10 giờ.|gia-dinh
2 phần|Một tờ giấy A4 được gấp đôi một lần. Số phần bằng nhau trên tờ giấy là bao nhiêu?|2 phần. Một lần gấp đôi chia tờ giấy thành 2 phần bằng nhau.|gia-dinh
1 250 ml|Một bình có 2 lít nước. Rót ra 750 ml. Bình còn lại bao nhiêu ml?|1 250 ml. 2 lít = 2 000 ml; 2 000 − 750 = 1 250 ml.|gia-dinh
Tắt đèn khi ra khỏi phòng|Hành động nào thể hiện tiết kiệm điện?|Đó là tắt đèn khi ra khỏi phòng.|gia-dinh
35 quả|Một cửa hàng có 100 quả bóng. Buổi sáng bán 38 quả, buổi chiều bán 27 quả. Còn lại bao nhiêu quả?|35 quả. 38 + 27 = 65; 100 − 65 = 35 quả.|gia-dinh
8 cây|Một đội trồng 24 cây trong 3 ngày như nhau. Trung bình mỗi ngày trồng bao nhiêu cây?|8 cây. 24 : 3 = 8 cây mỗi ngày.|gia-dinh
6|Đếm các ngôi sao trong hình. Có bao nhiêu ngôi sao?|6. Có 6 ngôi sao.|gia-dinh
8|Đếm các hình tròn trong hình. Có bao nhiêu hình tròn?|8. Có 8 hình tròn.|gia-dinh
9|Trong hình có bao nhiêu hình tam giác?|9. Có 9 hình tam giác.|gia-dinh
120|Tia số từ 90 đến 130 có một chấm tròn. Chấm tròn đó là số nào?|120. Chấm tròn nằm ở vạch 120.|gia-dinh
Ngôi sao vàng|Quan sát ba biểu tượng theo thứ tự. Biểu tượng nào là biểu tượng thứ ba?|Đó là ngôi sao vàng.|gia-dinh
Hình tròn xanh|Quan sát các hình. Hình nào ở giữa hai ngôi sao?|Đó là hình tròn xanh.|gia-dinh
5|Quan sát hình. Có bao nhiêu giọt nước?|5. Có 5 giọt nước.|thien-nhien
8|Quan sát hình. Có bao nhiêu chiếc lá?|8. Có 8 chiếc lá.|thien-nhien
10|Quan sát hình. Có bao nhiêu tia nắng quanh mặt trời?|10. Có 10 tia nắng.|thien-nhien
6|Quan sát hình. Có bao nhiêu biển báo hình tam giác?|6. Có 6 biển báo hình tam giác.|gia-dinh
Cái ghế|Tôi có 4 cái chân, 1 cái lưng, nhưng không có cơ thể. Tôi là ai?|Đó là cái ghế.|gia-dinh
Không còn cục nào cả|Như bạn biết, 5 chia cho 5 thì bằng 1. Nếu bạn Tí có 5 cục kẹo chia đều cho 5 người bạn của mình, thì bạn Tí còn mấy cục kẹo?|Không còn cục nào cả.|gia-dinh
Không bao giờ bằng tuổi nhau|Bây giờ anh hơn em 5 tuổi. Vậy sau bao nhiêu năm nữa tuổi anh bằng tuổi em?|Không bao giờ bằng tuổi nhau.|gia-dinh
Lấy tay che mắt|Làm thế nào để 1 tay che kín bầu trời?|Đó là lấy tay che mắt.|gia-dinh
Là ngày thứ 7 ngày 14|Đằng sau màn đêm hắc ám của thứ 6 ngày 13 là gì?|Đó là là ngày thứ 7 ngày 14.|gia-dinh
Ngày mai|Cái gì luôn đến nhưng không bao giờ đến?|Đó là ngày mai.|gia-dinh
Tên của bạn|Cái gì của bạn, nhưng người khác dùng nhiều hơn bạn?|Đó là tên của bạn.|gia-dinh
Lòng bàn chân|Cái gì khi bạn đứng thì nó nằm, khi bạn nằm thì nó đứng?|Đó là lòng bàn chân.|gia-dinh
Hố|Cái gì bạn càng lấy đi nhiều, nó càng lớn?|Đó là hố.|gia-dinh
Chuông|Cái gì cất tiếng nhưng không có miệng?|Đó là chuông.|gia-dinh
Thứ hai|Nếu bạn đang ở một cuộc đua và bạn vừa vượt qua người thứ hai. Hỏi bây giờ bạn đang ở vị trí thứ mấy?|Đó là thứ hai.|gia-dinh
Tương lai|Cái gì là của bạn nhưng bạn lại không bao giờ nhìn thấy?|Đó là tương lai.|gia-dinh
Khuỷu tay phải|Cái gì bạn cầm trong tay trái, không thể cầm trong tay phải?|Đó là khuỷu tay phải.|gia-dinh
Đồng xu|Cái gì có đầu, có đuôi, nhưng không có thân?|Đó là đồng xu.|gia-dinh
Chân|Cái gì mà bé phải nhấc lên rồi thả xuống nhiều lần mới đi được?|Đó là chân.|gia-dinh
Ống hút|Một ly thuỷ tinh đựng đầy nước, làm thế nào để lấy nước dưới đáy ly mà không đổ nước ra ngoài ?|Đó là ống hút.|gia-dinh
Là khi buồn ngủ|Với con người, thời điểm tốt nhất để đi ngủ là khi nào?|Đó là là khi buồn ngủ.|gia-dinh
9 người|Bố mẹ có sáu người con trai, mỗi người con trai có một em gái. Hỏi gia đình đó có bao nhiêu người?|Đó là 9 người.|gia-dinh
que diêm|Nếu chỉ có một que diêm, trong một ngày mùa đông giá rét, bạn bước vào căn phòng có một cây đèn, một bếp dầu, và một bếp củi, bạn thắp gì trước tiên?|Đó là que diêm.|gia-dinh
Không biết nấu chín|Tại sao sư tử ăn thịt sống?|Không biết nấu chín.|gia-dinh
Cái áo|Có cổ nhưng không có miệng là gì?|Đó là cái áo.|gia-dinh
Mở mắt|Bạn làm việc gì đầu tiên mỗi buổi sáng?|Đó là mở mắt.|gia-dinh
Con Tem|Tôi chu du khắp thế giới mà tôi vẫn ở nguyên một chỗ, tôi là ai?|Đó là con Tem.|gia-dinh
Khúc xạ phản xạ và tán sắc ánh sáng|Cầu vồng do hiện tượng gì tạo nên?|Đó là khúc xạ phản xạ và tán sắc ánh sáng.|gia-dinh
Xe lửa (tàu hỏa) vì “vô ga” = vào nh|Xe gì càng vô (vào) ga càng đi chậm?|Đó là xe lửa (tàu hỏa) vì “vô ga” = vào nhà ga.|gia-dinh
Gà không có răng|Ba con gà có tất cả bao nhiêu cái răng?|Đó là gà không có răng.|gia-dinh
Bông tai|Bông gì không mọc từ cây?|Đó là bông tai.|gia-dinh
Cờ vua|Môn thể thao nào có cả vua lẫn hoàng hậu?|Đó là cờ vua.|gia-dinh
Kiến thức|Kiến nào không bao giờ ngủ?|Đó là kiến thức.|gia-dinh
Vạn lý trường thành|Bức tường nào dài nhất thế giới?|Đó là vạn lý trường thành.|gia-dinh
Đồng tiền|Đồng gì mà đa số ai cũng thích?|Đó là đồng tiền.|gia-dinh
Dừa lửa|Dừa nào nghe tên đã thấy nóng?|Đó là dừa lửa.|gia-dinh
Cá không ươn|Cá không ăn muối cá ươn, cá ăn muối thì thế nào?|Đó là cá không ươn.|gia-dinh
Không con nào vì gà không bơi được|Một con gà trống và một con gà mái thi nhau bơi qua sông, hỏi con nào đến đích trước?|Không con nào vì gà không bơi được.|gia-dinh
Không có quy định, chạy càng nhanh c|Tốc độ quy định tối đa của một vận động viên trong cuộc thi chạy marathon là bao nhiêu?|Không có quy định, chạy càng nhanh càng tốt.|gia-dinh
Tháng năm|Ngày tháng mười chưa cười đã tối. Đêm tháng mấy chưa nằm đã sáng?|Đó là tháng năm.|gia-dinh
Đánh golf|Môn thể thao nào mà người ta chỉ đi bộ, ít khi chạy trên cỏ?|Đó là đánh golf.|gia-dinh
Xe ba gác|Xe gì ba bánh, chở hàng chở khách, bác tài phải đạp?|Đó là xe ba gác.|gia-dinh
Con mắt|Đỏ hoe là tính từ mô tả cái gì?|Đó là con mắt.|gia-dinh
Cua đinh|Cua đá, cua đinh và cáy. Con nào không thuộc bộ cua?|Đó là cua đinh.|gia-dinh
Dãy Bạch Mã|Dãy núi nào là sự phân chia khí hậu giữa hai miền Bắc và Nam?|Đó là dãy Bạch Mã.|gia-dinh
An Giang|Đường thốt nốt là đặc sản của tỉnh nào?|Đó là an Giang.|gia-dinh
Tướng trong bàn cờ|Tướng nào mà không cần ăn uống mà vẫn đánh trận được?|Đó là tướng trong bàn cờ.|gia-dinh
Ngôi sao|Ông gì mà ti tỉ ông Ban đêm thì thấy, trưa không ông nào Hay là tuổi hạc đã cao Mỏi chân ông chẳng thể nào xuống chơi! (Đố là gì?)|Đó là ngôi sao.|gia-dinh
Nó không kêu|Khi đổ bánh xèo nó kêu xèo, vậy khi đổ bánh bèo nó kêu sao?|Đó là nó không kêu.|gia-dinh
Ngày xửa ngày xưa|Ngày nào đã có từ rất lâu nhưng không ai thấy?|Đó là ngày xửa ngày xưa.|gia-dinh
Thần Kim Quy|Theo truyền thuyết, Lê Lợi trả kiếm Thuận Thiên cho vị thần nào?|Đó là thần Kim Quy.|gia-dinh
Hồ Hoàn Kiếm|Thần Kim Quy đòi kiếm của Lê Lợi ở đâu?|Đó là hồ Hoàn Kiếm.|gia-dinh
Bóng tối|Cái gì có càng nhiều thì càng khó thấy nó?|Đó là bóng tối.|gia-dinh
Không kết hôn được|Chồng của góa phụ có kết hôn được không?|Không kết hôn được.|gia-dinh
Dây điện không có cắm điện|Con chó có thể cắn đứt sợi dây điện mà không bị gì. Tại sao?|Đó là dây điện không có cắm điện.|gia-dinh
Cần Thơ|Thành phố nào ở miền Tây Nam Bộ được mệnh danh là “Tây Đô”?|Đó là cần Thơ.|gia-dinh
Bữa sáng và bữa trưa|Chỉ có hai thứ chúng ta không thể ăn vào bữa tối. Đó là gì?|Đó là bữa sáng và bữa trưa.|gia-dinh
Mặc cả|Phụ nữ khi ra chợ thường hay mặc gì?|Đó là mặc cả.|gia-dinh
Cầu thủ đó là con gái|Một cầu thủ bóng đá nổi tiếng có một em trai, nhưng đứa em trai đó không chịu nhận cầu thủ đó là anh của mình, tại sao vậy?|Đó là cầu thủ đó là con gái.|gia-dinh
Mai mốt|Mai gì không bao giờ thấy nở?|Đó là mai mốt.|gia-dinh
Làm thinh|Làm gì mà không phát ra tiếng?|Đó là làm thinh.|gia-dinh
Gập lại|Cái gì mà máy tính bàn không thể làm được như laptop?|Đó là gập lại.|gia-dinh
Cái điện thoại|Cái gì yêu cầu bạn phải trả lời nhưng lại không hỏi bất kỳ câu hỏi nào?|Đó là cái điện thoại.|gia-dinh
Cái gối|Cái gì mất đầu vào buổi sáng và có lại đầu vào buổi tối?|Đó là cái gối.|gia-dinh
Lang ở đây là con sói|“Lòng lang dạ thú”, lang ở đây là con gì?|Đó là lang ở đây là con sói.|gia-dinh
Là lứa trứng đầu tiên của con gà khi|Trứng gà so là trứng gà gì?|Đó là là lứa trứng đầu tiên của con gà khi đẻ.|gia-dinh
9|Có bao nhiêu chữ cái trong từ "Tiếng Việt"?|9. “Tiếng” có 5 chữ cái và “Việt” có 4 chữ cái, tổng cộng 9 chữ cái.|gia-dinh
Cá heo|Con gì có tên gọi là Heo nhưng lại không hề béo ú, mà lại rất thích bơi lội?|Đó là cá heo.|gia-dinh
Quả sầu riêng|Trong mâm ngũ quả ngày Tết, loại quả nào có tên mà người ta không muốn ăn vào ngày đầu năm?|Đó là quả sầu riêng.|gia-dinh
Mật mã|Mật nào không ăn được (đố chữ)?|Đó là mật mã.|gia-dinh
Bánh xe|Loại bánh gì không ăn được? (đố chữ)|Đó là bánh xe.|gia-dinh
Công lý|Công nào không có lông. (Đố chữ)?|Đó là công lý.|gia-dinh
Dừa và dứa|Quả gì thêm huyền thì ngọt, thêm sắc thì chua. (Đố chữ)?|Dừa và dứa. “Dưa” thêm dấu huyền thành “dừa”, thêm dấu sắc thành “dứa”.|gia-dinh
Rau câu|Rau gì không trồng không tưới, muôn hình muôn vẻ miệng cười khen ngon (đố chữ)?|Đó là rau câu.|gia-dinh
Lâm Đồng|Tỉnh nào nước ta có tên nghe nửa ruộng nửa rừng (đố chữ)|Đó là lâm Đồng.|gia-dinh
Tên|Na là con gái của Nam. Vậy thì Nam là ____ của bố Na. Điền từ còn thiếu vào phần còn thiếu ____|Đó là tên.|gia-dinh
Con ốc sên|Con gì mang nhà đi khắp nơi?|Đó là con ốc sên.|con-vat
Gấu|Con gì ngủ suốt mùa đông?|Gấu. Nhiều loài gấu giảm mạnh hoạt động và ngủ đông để vượt qua mùa lạnh khan hiếm thức ăn.|con-vat
Con chim|Con gì có lông mà biết bay?|Đó là con chim.|con-vat
Con vịt|Con gì có cánh mà bơi được?|Đó là con vịt.|con-vat
Con khỉ|Con gì có chân mà leo cây giỏi?|Đó là con khỉ.|con-vat
Con hươu cao cổ|Con gì có cổ dài mà ăn lá cây cao?|Đó là con hươu cao cổ.|con-vat
Con gà|Con gì có cánh mà không bay cao?|Đó là con gà.|con-vat
Con nhện|Con gì có 8 chân mà bò rất nhanh?|Đó là con nhện.|con-vat
Con ong|Con gì có 6 chân mà bay được?|Đó là con ong.|con-vat
Cá heo|Con gì có vây mà nhảy được?|Đó là cá heo.|con-vat
Con bướm|Con gì có cánh mà đậu trên hoa?|Đó là con bướm.|con-vat
Mướp đắng|Quả gì đắng nhưng nhiều người thích ăn?|Đó là mướp đắng.|cay-qua
Khế|Quả gì bổ đôi ra có ngôi sao?|Đó là cây khế.|cay-qua
Cầu vồng|Cái gì có bảy màu rất đẹp sau cơn mưa?|Đó là cầu vồng.|thien-nhien
Mặt trăng|Cái gì sáng nhất trên bầu trời ban đêm?|Đó là mặt trăng.|thien-nhien
Mặt trời|Cái gì sáng nhất ban ngày?|Đó là mặt trời.|thien-nhien
Mít|Quả gì ăn ngọt nhớt?|Đó là cây mít.|cay-qua
Chim cánh cụt|Con gì tên một loài chim nhưng lại không biết bay, sống dưới nước và là một vận động viên bơi lội cừ khôi?|Đó là chim cánh cụt.|con-vat
Cá khô|Con gì sống dưới nước nhưng không biết bơi?|Đó là cá khô.|con-vat
2 quả|Có ba quả táo trên bàn và bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?|Đó là 2 quả.|thien-nhien
Hà Lan|Khi nhắc đến cối xay gió, người ta thường nghĩ đến đất nước nào?|Đó là hà Lan.|con-vat
Tất cả các loài vì nhà ko biết nhảy|Loài chó nào nhảy cao bằng toà nhà cao nhất thế giới?|Đó là tất cả các loài vì nhà ko biết nhảy.|con-vat
Tàu hỏa hơi nước|Con gì ăn lửa với nước than?|Đó là tàu hỏa hơi nước.|thien-nhien
Đó lả cái bóng của mình|Nắng ba năm tôi không bỏ bạn, mưa 1 ngày sao bạn lại bỏ tôi là cái gì?|Đó là đó lả cái bóng của mình.|con-vat
Đó là mặt trăng|Cái gì bằng cái vung, vùng xuống ao. Đào chẳng thấy, lấy chẳng được?|Đó là đó là mặt trăng.|thien-nhien
Cây cầu|Cái gì có lắm chân tay Đuôi thì chẳng thấy, mà có hai đầu?|Đó là cây cầu.|thien-nhien
11 nước|Khu vực Đông Nam Á gồm có bao nhiêu nước?|Đó là 11 nước.|thien-nhien
Nam Phi|Ở Châu Phi, chim cánh cụt sống ở nước nào?|Đó là nam Phi.|cay-qua
32|Người trưởng thành sẽ có bao nhiêu cái răng?|32. Một người trưởng thành thường có tối đa 32 răng vĩnh viễn nếu mọc đủ bốn răng khôn.|thien-nhien
Trên bàn cờ tướng|Ở đâu ngựa có thể qua sông, voi thì không?|Đó là trên bàn cờ tướng.|thien-nhien
Gió|Cát đâu ai bốc tung trời Sóng sông ai vỗ, cây đồi ai rung? (Đố là gì)|Đó là gió.|thien-nhien
Đẻ ra voi con|Điều gì mà chỉ có loài voi làm được, còn các loài khác thì không?|Đó là đẻ ra voi con.|con-vat
3 nước|Bán đảo Đông Dương gồm có mấy nước?|Đó là 3 nước.|thien-nhien
Vẫn 3 phút thôi|Nếu 3 con mèo bắt được 3 con chuột trong 3 phút thì cần bao lâu để 100 con mèo bắt được 100 con chuột?|Đó là vẫn 3 phút thôi.|con-vat
Trứng gà|Trong tiếng Việt, tìm một từ vừa có tên gọi 1 loài động vật, vừa có tên gọi loài thực vật?|Đó là trứng gà.|con-vat
Năm ngón tay|Năm ông cùng ở một nhà Tình huynh nghĩa đệ vào ra thuận hòa Bốn ông tuổi đã lên ba Một ông đã già lại mới lên hai. Đố là cái gì?|Đó là năm ngón tay.|thien-nhien
Cái bảng|Cái gì càng trắng càng bẩn?|Đó là cái bảng.|con-vat
Con hổ không ăn cỏ|Câu đố mẹo có đáp án: Một con hổ bị xích vào gốc cây, sợi xích dài 30m. Có 1 bụi cỏ cách gốc cây 31m, đố bạn làm sao con hổ ăn được bụi cỏ?|Đó là con hổ không ăn cỏ.|con-vat
Đám mây|Khi xanh, khi trắng, khi hồng Chẳng thả dưới nước cũng bồng bềnh trôi? (Đố là gì?)|Đó là đám mây.|thien-nhien
Hạt mưa|Không có quả, chẳng có cây Thế mà có hạt rụng đầy nơi nơi Cỏ cây thấy rụng thì vui Loài vật thấy rụng tìm nơi ẩn mình? (Đố là gì?)|Đó là hạt mưa.|thien-nhien
Nước|Cái gì lỏng ở quanh đây - Nắng lên kết cánh mà bay về trời - Lạnh thì trở lại xuống chơi - Chờ khi gặp nóng tức thời bay lên? (Đố là gì?)|Đó là nước.|thien-nhien
Hạn hán|Ruộng đồng nứt nẻ chân chim Lúa mầu khô héo, cá tìm chỗ sâu Ngày đêm tát mẻ miệng gầu Mong sao thủy lợi đi đầu tưới tiêu? (Đố là gì?)|Đó là hạn hán.|thien-nhien
Bão lụt|Ầm ầm cuốn tự ngoài khơi Dâng cao, nước ngập, sóng dồi hung hăng Cuốn trôi nhà cửa xóm làng Phá đê, tàn hại mùa màng, thuyền ghe? (Đố là gì?)|Đó là bão lụt.|thien-nhien
Không khí|Cuộc đời vô sắc vô hình Thân tôi trôi nổi, bồng bềnh đó đây Có tôi, người vật, cỏ cây Đều sinh sống được, tôi hay giúp đời? (Đố là gì?)|Không khí.|con-vat
Biển|Rõ ràng chẳng phải nồi canh - Thế mà vị mặn, nước xanh, cá nhiều? (Đố là gì?)|Đó là con biển.|con-vat
Con chuồn chuồn|Con gì đôi cánh mỏng tang Bay cao bay thấp báo rằng nắng mưa? Đố là con gì?|Đó là con chuồn chuồn.|thien-nhien
1. Mở tủ lạnh. 2. Cho con voi vào. 3|Kể ra ba bước để cho một con voi vào một cái tủ lạnh?|1. Mở tủ lạnh. 2. Cho con voi vào. 3. Đóng tủ lạnh lại.|con-vat
Sông Nhật Lệ|Sông gì có nước mắt?|Đó là sông Nhật Lệ.|thien-nhien
Cây kéo|Cây gì có hai cái càng?|Đó là cây kéo.|thien-nhien
Bút chì|Cái gì càng viết càng ngắn lại?|Đó là bút chì.|gia-dinh
Bàn học|Cái gì có 4 chân mà không đi được?|Đó là bàn học.|gia-dinh
Nước lau bảng|Cái gì càng rửa càng bẩn?|Đó là nước lau bảng.|con-vat
Quyển sách|Cái gì có gáy mà không phải con vật?|Đó là quyển sách.|con-vat
Lịch|Cái gì có lá mà không phải cây?|Đó là lịch.|gia-dinh
Kẹp giấy|Cái gì có càng mà không phải cua?|Đó là kẹp giấy.|cay-qua
Bút bi|Cái gì có ruột mà không phải con vật?|Đó là bút bi.|con-vat
Bút lông|Cái gì có lông mà không phải gà?|Đó là bút lông.|gia-dinh
Mũi bút|Cái gì có mũi mà không ngửi được?|Đó là mũi bút.|gia-dinh
Khóa kéo cặp|Cái gì có khóa mà không mở cửa được?|Đó là khóa kéo cặp.|gia-dinh
Tranh vẽ|Cái gì càng tô càng đẹp?|Đó là tranh vẽ.|gia-dinh
Vở|Cái gì có bìa mà không phải sách?|Đó là vở.|gia-dinh
Que tính|Cái gì có đầu mà không có mình?|Đó là que tính.|gia-dinh
Compa|Cái gì có chân mà không đi được?|Đó là compa.|gia-dinh
Đinh ghim|Cái gì có đầu mà không có mặt?|Đó là đinh ghim.|cay-qua
Bác sĩ|Ai hay mặc áo trắng, cầm ống nghe khám cho bé?|Đó là bác sĩ.|gia-dinh
Bộ đội|Ai mặc áo xanh, đội mũ xanh bảo vệ đất nước?|Đó là bộ đội.|gia-dinh
Cô giáo|Ai hay cầm phấn viết bảng dạy bé học?|Đó là cô giáo.|gia-dinh
Trọng tài|Ai hay cầm cờ vẫy trên sân bóng đá?|Đó là trọng tài.|gia-dinh
Thợ cắt tóc|Ai hay cầm kéo cắt tóc cho bé đẹp?|Đó là thợ cắt tóc.|gia-dinh
Y tá|Ai hay cầm kim tiêm cho bé khi ốm?|Đó là y tá.|gia-dinh
Thợ sửa xe|Ai hay cầm búa sửa xe cho bố?|Đó là thợ sửa xe.|gia-dinh
Cô lao công|Ai hay cầm chổi quét lớp học sạch sẽ?|Đó là cô lao công.|con-vat
Ba mẹ|Ai làm cả đời không lấy tiền lương?|Đó là ba mẹ.|gia-dinh
Cảnh sát giao thông|Ai hay đội mũ bảo hiểm đứng giữa ngã tư?|Đó là cảnh sát giao thông.|con-vat
MC|Ai hay cầm micro dẫn chương trình?|Đó là mC.|gia-dinh
Cô giáo|Ai hay cầm bút đỏ chấm bài cho bé?|Đó là cô giáo.|gia-dinh
Bác nông dân|Ai hay cầm máy cày ngoài đồng?|Đó là bác nông dân.|gia-dinh
Vận động viên|Ai hay cầm vợt đánh cầu lông?|Đó là vận động viên.|gia-dinh
Xe đạp|Xe gì không cần đổ xăng?|Đó là xe đạp.|gia-dinh
Xe máy|Xe gì có 2 bánh mà không phải xe đạp?|Đó là xe máy.|gia-dinh
Xe đẩy em bé|Xe gì có 4 bánh mà không phải ô tô?|Đó là xe đẩy em bé.|gia-dinh
Xe cảnh sát|Xe gì có còi mà kêu inh ỏi?|Đó là xe cảnh sát.|gia-dinh
Xe cứu thương|Xe gì có đèn mà chớp chớp?|Đó là xe cứu thương.|cay-qua
Xe cứu hỏa|Xe gì có thang mà leo lên cao?|Đó là xe cứu hỏa.|gia-dinh
Xe xúc|Xe gì có càng mà xúc đất?|Đó là xe xúc.|gia-dinh
Xe cẩu|Xe gì có cần cẩu mà nhấc đồ?|Đó là xe cẩu.|con-vat
Xe buýt trường|Xe gì chở học sinh đi học?|Đó là xe buýt trường.|gia-dinh
Tàu ngầm|Xe gì chạy dưới nước?|Đó là tàu ngầm.|gia-dinh
Tàu thủy|Xe gì chạy trên nước?|Đó là tàu thủy.|gia-dinh
Xe trượt tuyết|Xe gì không có bánh?|Đó là xe trượt tuyết.|gia-dinh
Xe rác|Xe gì chở rác đi xa?|Đó là xe rác.|gia-dinh
Cục tẩy|Thân em mảnh dẻ, mặc áo màu trắng, chuyên dùng sửa lỗi cho những người sai?|Đó là cục tẩy.|gia-dinh
Quyển vở, sách giáo khoa|Cái gì có thể chứa được hàng trăm chữ cái, nhưng lại không thể nói được một từ nào?|Đó là quyển vở, sách giáo khoa.|cay-qua
Thước kẻ|Thân em chỉ toàn là số, nhưng lại không hề biết tính toán. Là cái gì?|Đó là thước kẻ.|gia-dinh
Hộp đỏ|Ba hộp vàng, đỏ, xanh xếp theo một hàng. Hộp vàng ở đầu; hộp xanh đứng sau hộp đỏ. Hộp nào ở giữa?|Hộp đỏ. Thứ tự duy nhất là vàng, đỏ, xanh nên hộp đỏ ở giữa.|gia-dinh
Lê|Ba bạn An, Bình, Chi mỗi bạn chọn một quả: táo, cam, lê. Bình chọn cam. An không chọn táo. An chọn quả gì?|Lê. Bình chọn cam, An không chọn táo nên An chọn lê và Chi chọn táo.|gia-dinh
Tiếng Việt – Toán – Khoa học|Trên giá có ba quyển: Toán, Tiếng Việt, Khoa học. Quyển Toán nằm giữa hai quyển còn lại; Tiếng Việt ở bên trái. Thứ tự từ trái sang phải là gì?|Đó là tiếng Việt – Toán – Khoa học.|gia-dinh
Minh|Bốn bạn xếp hàng theo thứ tự từ trái sang phải. Lan đứng bên phải Minh; Huy đứng bên trái Minh; An đứng ở cuối hàng. Ai đứng thứ hai?|Minh. Thứ tự là Huy, Minh, Lan, An nên Minh đứng thứ hai.|gia-dinh
749|Một mật mã gồm ba chữ số khác nhau: 4, 7 và 9. Chữ số 4 không đứng đầu, chữ số 9 đứng sau chữ số 7. Mật mã là số nào?|749. Chỉ có 749 vừa có 9 sau 7 vừa không đặt 4 ở đầu.|gia-dinh
Hình vuông|Một dãy hình lặp theo thứ tự: tròn, vuông, tam giác, tròn, vuông, ... Hình thứ 8 là hình gì?|Một dãy hình lặp theo thứ tự: tròn, vuông, tam giác, tròn, vuông, hình vuông Hình thứ 8 là hình gì.|gia-dinh
5 số|Có bao nhiêu số chẵn từ 1 đến 10?|5 số. Đó là 2, 4, 6, 8, 10: có 5 số.|gia-dinh
8 ô|Một bảng 4 × 4 được tô màu xen kẽ như bàn cờ. Có bao nhiêu ô màu đen?|8 ô. 16 ô chia đều thành hai màu nên có 8 ô màu đen.|gia-dinh
Tàu điện không có khói|Một tàu điện chạy về hướng Bắc. Gió thổi từ phía Nam. Khói tàu bay về hướng nào?|Đó là tàu điện không có khói.|gia-dinh
Người đó không có tóc|Một người đi dưới mưa lớn không có ô, không đội mũ mà tóc vẫn không ướt. Vì sao?|Đó là người đó không có tóc.|gia-dinh
Không có cầu thang|Một căn nhà chỉ có một tầng. Mọi đồ vật đều màu xanh. Hỏi cầu thang trong nhà màu gì?|Không có cầu thang.|gia-dinh
1 giờ|Bác sĩ dặn uống 3 viên thuốc, mỗi viên cách nhau 30 phút, uống viên đầu ngay bây giờ. Sau bao lâu uống xong viên thứ ba?|1 giờ. Uống viên đầu lúc 0 phút, viên hai lúc 30 phút, viên ba lúc 60 phút.|gia-dinh
Thứ Bảy|Mỗi tuần có 7 ngày. Nếu hôm nay là Chủ nhật, hôm qua là thứ mấy?|Thứ Bảy. Ngày trước Chủ nhật là thứ Bảy.|gia-dinh
4 viên|Trong túi có 3 viên bi đỏ, 3 viên bi xanh và 3 viên bi vàng. Lấy ít nhất bao nhiêu viên để chắc chắn có 2 viên cùng màu?|4 viên. Lấy 3 viên có thể là đỏ, xanh, vàng; viên thứ 4 chắc chắn trùng một màu đã có.|gia-dinh
2 lỗ|Một tờ giấy được gấp đôi một lần rồi cắt một lỗ xuyên qua cả hai lớp. Khi mở ra có mấy lỗ?|2 lỗ. Một lần cắt xuyên hai lớp tạo hai lỗ đối xứng khi mở ra.|gia-dinh
Không thay đổi|Một số tờ giấy được xếp chồng. Lấy 1 tờ trên cùng và đặt xuống dưới cùng. Số tờ giấy có thay đổi không?|Không thay đổi.|gia-dinh
Người đó thấp, không với tới nút tần|Một người sống ở tầng 10. Buổi sáng đi thang máy xuống tầng 1. Buổi chiều người đó chỉ đi thang máy đến tầng 7 rồi đi bộ lên, trừ hôm mưa. Vì sao?|Đó là người đó thấp, không với tới nút tầng 10.|gia-dinh
Nhẹ nhàng|Trong câu “Bạn Hoa rất dịu dàng”, từ nào gần nghĩa nhất với “dịu dàng”?|Nhẹ nhàng gần nghĩa với dịu dàng.|gia-dinh
Đường kẻ|Đố chữ: Đường gì không có xe chạy, thường có trong vở để giúp viết thẳng hàng?|Đường kẻ. Đó là đường kẻ trong vở.|gia-dinh
Bàn thắng|Đố chữ: Bàn gì không có chân, không dùng để ăn hay học, nhưng thường xuất hiện trong bóng đá?|Bàn thắng là từ “bàn” trong thể thao.|gia-dinh
Cầu tiến|Đố chữ: Cầu gì không bắc qua sông, là mong muốn của người ham học?|Cầu tiến là tinh thần ham học, muốn tiến bộ.|gia-dinh
Chân bàn|Đố chữ: Chân nào không dùng để đi nhưng giúp cái bàn đứng vững?|Chân bàn là bộ phận đỡ cho chiếc bàn đứng vững.|gia-dinh
Mũi tàu|Đố chữ: Mũi nào không dùng để ngửi nhưng nằm ở đầu một con tàu?|Mũi tàu là phần đầu của con tàu, không phải mũi trên khuôn mặt.|gia-dinh
Học lễ|Đố chữ: Môn gì không có thầy dạy, nhưng ai cũng cần học để cư xử tốt?|Học lễ là học cách ứng xử lễ phép, tôn trọng mọi người.|gia-dinh
Mẹ thiên nhiên|Đố chữ: Mẹ nào không sinh con, nhưng là cách gọi thân thương của thế giới tự nhiên?|Đó là mẹ thiên nhiên.|gia-dinh
Mắt kim|Đố chữ: Mắt nào không nhìn được nhưng giúp em may áo?|Mắt kim là lỗ nhỏ để luồn chỉ qua kim.|gia-dinh
Lưng sách|Đố chữ: Lưng nào không có da thịt nhưng có trong quyển sách?|Lưng sách là cạnh gáy của quyển sách.|gia-dinh
Miệng bình|Đố chữ: Miệng nào không ăn uống nhưng luôn nằm ở vật chứa nước?|Miệng bình là phần để rót nước vào hoặc ra.|gia-dinh
Yêu thương, giúp đỡ nhau|Câu ca dao “Bầu ơi thương lấy bí cùng” khuyên chúng ta điều gì?|Đó là yêu thương, giúp đỡ nhau.|gia-dinh
Đoàn kết, yêu thương đồng bào|Câu ca dao “Nhiễu điều phủ lấy giá gương” nhắc đến tình cảm nào?|Đó là đoàn kết, yêu thương đồng bào.|gia-dinh
Quạt|Đoán đồ vật qua câu thơ: “Không chân mà chạy / Vòng quanh sân nhà / Gặp gió quay tít / Cho mát mọi nhà.” Đó là gì?|Quạt. Đó là chiếc quạt.|gia-dinh
Đồng hồ|Đoán đồ vật qua câu thơ: “Mặt tròn như trăng / Có kim không khâu / Mỗi ngày nhắc bé / Giờ nào học mau.” Đó là gì?|Đồng hồ. Đó là chiếc đồng hồ.|gia-dinh
Quyển sách|Đoán đồ vật qua câu thơ: “Không phải chim / Mà có trang cánh / Mở ra cho bé / Bao điều hay lành.” Đó là gì?|Quyển sách có nhiều trang mở ra như những cánh.|gia-dinh
Cái ô|Đoán đồ vật qua câu thơ: “Bé đội trên đầu / Trời mưa không ướt / Xòe ra như nấm / Gấp lại thật gọn.” Đó là gì?|Cái ô. Đó là chiếc ô dùng khi trời mưa hoặc nắng.|gia-dinh
Xe đạp|Đoán đồ vật qua câu thơ: “Bé không có chân / Mà đi khắp phố / Chở người, chở sách / Hai bánh quay tròn.” Đó là gì?|Xe đạp. Đó là chiếc xe đạp.|gia-dinh
Cục tẩy|Đoán đồ vật qua câu thơ: “Nhỏ xinh màu trắng / Xóa nét bút chì / Giúp trang vở sạch / Sau lần viết sai.” Đó là gì?|Cục tẩy. Đó là cục tẩy.|gia-dinh
Cái lược|Đoán đồ vật qua câu thơ: “Có răng mà chẳng nhai / Có lưng mà không mỏi / Chải tóc cho bé mỗi ngày / Đó là vật gì nhỉ?” Đó là gì?|Cái lược. Đó là chiếc lược.|gia-dinh
Khoảng rộng, trải ra|Trong cụm “cánh đồng”, từ “cánh” có nghĩa là gì?|Đó là khoảng rộng, trải ra.|gia-dinh
Phần thấp nhất của núi|Trong cụm “chân núi”, từ “chân” chỉ phần nào?|Đó là phần thấp nhất của núi.|gia-dinh
Các lỗ nhỏ đan xen|Trong cụm “mắt lưới”, từ “mắt” chỉ gì?|Đó là các lỗ nhỏ đan xen.|gia-dinh
Lê Lợi|Trong truyền thuyết “Sự tích Hồ Gươm”, ai nhận gươm thần để đánh giặc?|Lê Lợi nhận gươm thần và sau đó hoàn gươm cho Rùa Vàng ở hồ Gươm.|gia-dinh
Không chủ quan, cần kiên trì|Bài học chính từ truyện “Rùa và Thỏ” là gì?|Không chủ quan, cần kiên trì.|gia-dinh
Nêu bài học về cách sống|Truyện ngụ ngôn thường dùng câu chuyện về con vật hoặc sự vật để làm gì?|Đó là nêu bài học về cách sống.|gia-dinh
Chăm chỉ, biết chuẩn bị|Trong câu chuyện “Kiến và Ve Sầu”, kiến được nhắc đến với đức tính nào?|Đó là chăm chỉ, biết chuẩn bị.|gia-dinh
Tay ghế|Đố chữ: Tay nào không cầm nắm nhưng có ở chiếc ghế?|Tay ghế là cách gọi theo nghĩa chuyển.|gia-dinh
Cổ chai|Đố chữ: Cổ nào không quay được nhưng có trên chai nước?|Cổ chai là phần hẹp nối miệng chai với thân chai.|gia-dinh
Mặt bàn|Đố chữ: Mặt nào không có mắt mũi nhưng dùng để đặt thức ăn?|Mặt bàn là bề mặt để đặt sách vở hoặc thức ăn.|gia-dinh
Vai đường|Đố chữ: Vai nào không phải vai người nhưng có ở con đường?|Vai đường là dải đất hoặc phần đường ở hai bên làn xe.|gia-dinh
Miệng sông|Đố chữ: Miệng nào không nói được nhưng là nơi nước chảy vào hoặc chảy ra?|Miệng sông là nơi dòng sông chảy ra vùng nước lớn hơn.|gia-dinh
Cánh cửa|Đố chữ: Cánh nào không mọc trên chim nhưng có thể mở ra ở cửa?|Cánh cửa là phần đóng mở được của cửa.|gia-dinh
Lá sách|Đố chữ: Lá nào không mọc trên cây nhưng có trong quyển sách?|Lá sách là một trang hoặc tờ giấy trong quyển sách.|gia-dinh
Mặt hồ|Đố chữ: Mặt nào không rửa được nhưng soi thấy mây trời?|Mặt hồ là bề mặt phía trên của hồ nước.|gia-dinh
Lòng hồ|Đố chữ: Lòng nào không ở trong cơ thể nhưng có thể chứa nước?|Lòng hồ là phần đáy, phần chứa nước của hồ.|gia-dinh
Đường thẳng|Đố chữ: Đường nào không dùng để đi nhưng có thể giúp ta giải bài Toán?|Đường thẳng là khái niệm trong Toán học.|gia-dinh
Bụng trống|Đố chữ: Bụng nào không phải bụng người nhưng có trong nhạc cụ?|Bụng trống là phần thân phình ra của trống.|gia-dinh
Ngọn cây|Đố chữ: Từ “ngọn” trong cụm nào chỉ phần cao nhất của cây?|Ngọn cây là phần cao nhất của cây.|gia-dinh
Đầu tàu|Đố chữ: Đầu nào không phải đầu người nhưng có ở đoàn tàu?|Đầu tàu là phần phía trước, thường là nơi đặt đầu máy.|gia-dinh
Lời thơ|Đố chữ: Lời nào không phát ra từ miệng nhưng ghi trên trang giấy?|Lời thơ là ngôn từ được viết trong một bài thơ.|gia-dinh
Dấu ấn, vẻ riêng|Đố chữ: Màu nào không phải màu sắc nhưng có trong câu “màu thời gian”?|Đó là dấu ấn, vẻ riêng.|gia-dinh
Đường kẻ|Đố chữ: Đường nào không có vị ngọt nhưng là lối đi trên giấy để viết chữ thẳng?|Đường kẻ giúp chữ viết thẳng hàng trên trang vở.|gia-dinh
Cuốn lịch|Đoán đồ vật qua câu thơ: “Mười hai tờ giấy / Mỗi tờ một tháng / Treo ngay góc học / Nhắc bé ngày lành.” Đó là gì?|Cuốn lịch có các tờ ghi ngày, tháng, năm.|gia-dinh
Mũ bảo hiểm|Đoán đồ vật qua câu thơ: “Nằm trên đầu bé / Đi xe thật an / Có quai cài chặt / Bảo vệ bình an.” Đó là gì?|Mũ bảo hiểm. Đó là mũ bảo hiểm.|gia-dinh
Cái chổi|Đoán đồ vật qua câu thơ: “Tay dài nhiều sợi / Quét bụi thật nhanh / Góc nhà sạch sẽ / Bạn của chị anh.” Đó là gì?|Cái chổi. Đó là cái chổi.|gia-dinh
Chìa khóa|Đoán đồ vật qua câu thơ: “Nhỏ xinh bằng sắt / Mở được cửa nhà / Không nói một tiếng / Đi đâu cũng mang.” Đó là gì?|Chìa khóa. Đó là chiếc chìa khóa.|gia-dinh
Bàn chải đánh răng|Đoán đồ vật qua câu thơ: “Sáng chiều hai lượt / Xếp hàng ngay ngắn / Kem thơm thêm chút / Răng bé trắng xinh.” Đó là gì?|Đó là bàn chải đánh răng.|gia-dinh
Xà phòng|Đoán đồ vật qua câu thơ: “Trơn tròn thơm mát / Gặp nước hóa bông / Rửa tay sạch sẽ / Bé dùng mỗi ngày.” Đó là gì?|Xà phòng. Đó là xà phòng.|gia-dinh
Cái kéo|Đoán đồ vật qua câu thơ: “Hai lưỡi nằm sát / Mở khép nhịp nhàng / Cắt giấy thành mảnh / Bé dùng thật ngoan.” Đó là gì?|Cái kéo. Đó là cái kéo.|gia-dinh
Cái gương|Đoán đồ vật qua câu thơ: “Có mặt soi mình / Treo trên tường nhỏ / Bé chải tóc xong / Nhìn xem đã rõ.” Đó là gì?|Cái gương. Đó là chiếc gương.|gia-dinh
Quyển vở|Đoán đồ vật qua câu thơ: “Bé gập lại được / Mở ra thành trang / Vẽ hình tô chữ / Bạn ở bên bàn.” Đó là gì?|Quyển vở. Đó là quyển vở.|gia-dinh
Loa|Đoán đồ vật qua câu thơ: “Không có chân tay / Mà mang tiếng hát / Bấm nút một cái / Âm thanh ngân vang.” Đó là gì?|Loa. Đó là chiếc loa.|gia-dinh
Bộ phận có thể mở ra, khép vào|Trong cụm từ “cánh cửa sổ”, từ “cánh” có nghĩa gì?|Đó là bộ phận có thể mở ra, khép vào.|gia-dinh
Nhấn mạnh vai trò của tre|Trong câu “Tre giữ làng, giữ nước”, từ “giữ” được lặp lại để làm gì?|Đó là nhấn mạnh vai trò của tre.|gia-dinh
Phần ở phía bắt đầu của làng|Từ “đầu” trong “đầu làng” có nghĩa là gì?|Đó là phần ở phía bắt đầu của làng.|gia-dinh
Cao - thấp|Cặp từ nào là từ trái nghĩa?|Cao - thấp. “Cao” và “thấp” là hai từ trái nghĩa.|gia-dinh
Nói lời phải giữ lấy lời|Câu tục ngữ nào khuyên ta biết giữ lời hứa?|Đó là nói lời phải giữ lấy lời.|gia-dinh
Từ láy mô phỏng âm thanh|Trong câu “Mưa rơi lộp bộp trên mái tôn”, “lộp bộp” là từ gì?|Từ láy mô phỏng âm thanh.|gia-dinh
Thời kì đẹp nhất, đầy sức sống|Từ “mùa xuân” trong câu “Tuổi trẻ là mùa xuân của đời người” mang nghĩa gì?|Đó là thời kì đẹp nhất, đầy sức sống.|gia-dinh
Nhận lại gươm thần|Trong “Sự tích Hồ Gươm”, Rùa Vàng đến để làm gì?|Đó là nhận lại gươm thần.|gia-dinh
Con Rồng cháu Tiên|Truyền thuyết nào giải thích nguồn gốc chung của người Việt?|Đó là con Rồng cháu Tiên.|gia-dinh
Không nên chủ quan, hiểu biết hạn hẹ|Bài học chính từ truyện “Ếch ngồi đáy giếng” là gì?|Không nên chủ quan, hiểu biết hạn hẹp.|gia-dinh
Lời thơ dân gian truyền miệng|“Ca dao” thường là gì?|Đó là lời thơ dân gian truyền miệng.|gia-dinh
cây|Đố gì thân gỗ đứng im, mùa hè che mát, chim tìm làm tổ?|cây. Đáp án là cây.|gia-dinh
quyển sách|Đố gì có lá, có trang, mở ra kể biết bao điều?|quyển sách. Đáp án là quyển sách.|gia-dinh
con tem|Đố gì không có chân mà đi, đưa thư đi khắp nơi?|con tem. Đáp án là con tem.|gia-dinh
bút chì|Đố gì ban ngày đi học, ban đêm nằm trong hộp?|bút chì. Đáp án là bút chì.|gia-dinh
điện thoại|Đố gì không có miệng mà nói, không có tai mà nghe, chỉ cần em bấm?|điện thoại. Đáp án là điện thoại.|gia-dinh
đồng hồ|Đố gì có mặt không có mũi, có kim không có chỉ?|đồng hồ. Đáp án là đồng hồ.|gia-dinh
cái khăn|Đố gì càng lau càng ướt?|cái khăn. Đáp án là cái khăn.|gia-dinh
cái chai|Đố gì có cổ mà không có đầu, có thân mà không có chân?|cái chai. Đáp án là cái chai.|gia-dinh
cái lược|Đố gì có răng mà không biết cắn, giúp tóc em gọn gàng?|cái lược. Đáp án là cái lược.|gia-dinh
cái bàn|Đố gì có chân nhưng không biết đi, có mặt nhưng không biết nói?|cái bàn. Đáp án là cái bàn.|gia-dinh
đám mây|Đố gì bay không cánh, khóc không mắt?|đám mây. Đáp án là đám mây.|gia-dinh
đàn piano|Đố gì có nhiều phím nhưng không mở được cửa?|đàn piano. Đáp án là đàn piano.|gia-dinh
cái cốc|Đố gì có mắt mà không nhìn, có tai mà không nghe?|cái cốc. Đáp án là cái cốc.|gia-dinh
tương lai|Đố gì luôn ở phía trước em nhưng em không thể nhìn thấy?|tương lai. Đáp án là tương lai.|gia-dinh
bong bóng|Đố gì càng đầy càng nhẹ?|bong bóng. Đáp án là bong bóng.|gia-dinh
cái đèn|Đố gì có một chân nhưng không biết bước, thường đứng cạnh bàn học?|cái đèn. Đáp án là cái đèn.|gia-dinh
kim đồng hồ|Đố gì ngày nào cũng đi mà không bao giờ đến trường?|kim đồng hồ. Đáp án là kim đồng hồ.|gia-dinh
máy tính|Đố gì vừa có thể “chạy” vừa không có chân, lại giúp em làm bài?|máy tính. Đáp án là máy tính.|gia-dinh
mặt trời|Đố gì sáng ở trên trời, ban ngày tỏa nắng, ban đêm không thấy?|mặt trời. Đáp án là mặt trời.|gia-dinh
con cá|Đố gì khi ở trong nước thì sống, ra khỏi nước thì chết?|con cá. Đáp án là con cá.|gia-dinh
cái ô|Đố gì có cánh mà không bay, mở ra thì che nắng che mưa?|cái ô. Đáp án là cái ô.|gia-dinh
tuổi|Đố gì chỉ tăng lên mà không bao giờ giảm, kể từ ngày em sinh ra?|tuổi. Đáp án là tuổi.|gia-dinh
cái khóa|Đố gì có lưỡi nhưng không nếm, dùng để đóng mở khóa?|cái khóa. Đáp án là cái khóa.|gia-dinh
hòm thư|Đố gì không có miệng nhưng vẫn “nuốt” được thư?|hòm thư. Đáp án là hòm thư.|gia-dinh
cây bút chì|Đố gì càng đi càng ngắn?|cây bút chì. Đáp án là bút chì.|gia-dinh
tệp tin|Đố gì không phải cửa mà có thể “khóa” và “mở” được trên máy tính?|tệp tin. Đáp án là tệp tin.|gia-dinh
bông tuyết|Đố gì màu trắng, bay nhẹ, gặp nắng thì tan?|bông tuyết. Đáp án là bông tuyết.|gia-dinh
sóng biển|Đố gì không có tay mà vỗ, không có chân mà chạy quanh bờ?|sóng biển. Đáp án là sóng biển.|gia-dinh
cuốn lịch|Đố gì là bạn của em, không nói mà luôn nhắc em ngày tháng?|cuốn lịch. Đáp án là cuốn lịch.|gia-dinh
siêng năng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “chăm chỉ”?|siêng năng. “siêng năng” là từ gần nghĩa với “chăm chỉ”.|gia-dinh
can đảm|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “dũng cảm”?|can đảm. “can đảm” là từ gần nghĩa với “dũng cảm”.|gia-dinh
trung thực|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “thật thà”?|trung thực. “trung thực” là từ gần nghĩa với “thật thà”.|gia-dinh
gắn bó|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “đoàn kết”?|gắn bó. “gắn bó” là từ gần nghĩa với “đoàn kết”.|gia-dinh
hớn hở|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “vui vẻ”?|hớn hở. “hớn hở” là từ gần nghĩa với “vui vẻ”.|gia-dinh
mau|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “nhanh”?|mau. “mau” là từ gần nghĩa với “nhanh”.|gia-dinh
thênh thang|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “rộng”?|thênh thang. “thênh thang” là từ gần nghĩa với “rộng”.|gia-dinh
cao vút|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “cao”?|cao vút. “cao vút” là từ gần nghĩa với “cao”.|gia-dinh
im ắng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “yên tĩnh”?|im ắng. “im ắng” là từ gần nghĩa với “yên tĩnh”.|gia-dinh
hiền hậu|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “hiền lành”?|hiền hậu. “hiền hậu” là từ gần nghĩa với “hiền lành”.|gia-dinh
nhún nhường|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “khiêm tốn”?|nhún nhường. “nhún nhường” là từ gần nghĩa với “khiêm tốn”.|gia-dinh
thận trọng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “cẩn thận”?|thận trọng. “thận trọng” là từ gần nghĩa với “cẩn thận”.|gia-dinh
dành dụm|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “tiết kiệm”?|dành dụm. “dành dụm” là từ gần nghĩa với “tiết kiệm”.|gia-dinh
sáng dạ|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “thông minh”?|sáng dạ. “sáng dạ” là từ gần nghĩa với “thông minh”.|gia-dinh
tinh tươm|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “sạch sẽ”?|tinh tươm. “tinh tươm” là từ gần nghĩa với “sạch sẽ”.|gia-dinh
ngăn nắp|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “gọn gàng”?|ngăn nắp. “ngăn nắp” là từ gần nghĩa với “gọn gàng”.|gia-dinh
ấm cúng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “ấm áp”?|ấm cúng. “ấm cúng” là từ gần nghĩa với “ấm áp”.|gia-dinh
tấp nập|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “đông đúc”?|tấp nập. “tấp nập” là từ gần nghĩa với “đông đúc”.|gia-dinh
khỏe khoắn|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “mạnh mẽ”?|khỏe khoắn. “khỏe khoắn” là từ gần nghĩa với “mạnh mẽ”.|gia-dinh
tập trung|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “chăm chú”?|tập trung. “tập trung” là từ gần nghĩa với “chăm chú”.|gia-dinh
yêu đời|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “lạc quan”?|yêu đời. “yêu đời” là từ gần nghĩa với “lạc quan”.|gia-dinh
êm ấm|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “hòa thuận”?|êm ấm. “êm ấm” là từ gần nghĩa với “hòa thuận”.|gia-dinh
hoạt bát|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “nhanh nhẹn”?|hoạt bát. “hoạt bát” là từ gần nghĩa với “nhanh nhẹn”.|gia-dinh
lộng lẫy|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “rực rỡ”?|lộng lẫy. “lộng lẫy” là từ gần nghĩa với “rực rỡ”.|gia-dinh
mênh mông|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “bao la”?|mênh mông. “mênh mông” là từ gần nghĩa với “bao la”.|gia-dinh
mộc mạc|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “giản dị”?|mộc mạc. “mộc mạc” là từ gần nghĩa với “giản dị”.|gia-dinh
bền bỉ|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “kiên trì”?|bền bỉ. “bền bỉ” là từ gần nghĩa với “kiên trì”.|gia-dinh
kính trọng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “tôn trọng”?|kính trọng. “kính trọng” là từ gần nghĩa với “tôn trọng”.|gia-dinh
thương mến|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “yêu thương”?|thương mến. “thương mến” là từ gần nghĩa với “yêu thương”.|gia-dinh
giữ gìn|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “bảo vệ”?|giữ gìn. “giữ gìn” là từ gần nghĩa với “bảo vệ”.|gia-dinh
hỗ trợ|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “giúp đỡ”?|hỗ trợ. “hỗ trợ” là từ gần nghĩa với “giúp đỡ”.|gia-dinh
kiến tạo|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “xây dựng”?|kiến tạo. “kiến tạo” là từ gần nghĩa với “xây dựng”.|gia-dinh
khởi đầu|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “bắt đầu”?|khởi đầu. “khởi đầu” là từ gần nghĩa với “bắt đầu”.|gia-dinh
chiến thắng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “thắng lợi”?|chiến thắng. “chiến thắng” là từ gần nghĩa với “thắng lợi”.|gia-dinh
trọn vẹn|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “đầy đủ”?|trọn vẹn. “trọn vẹn” là từ gần nghĩa với “đầy đủ”.|gia-dinh
đúng đắn|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “chính xác”?|đúng đắn.|gia-dinh
mềm dẻo|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “mềm mại”?|mềm dẻo. “mềm dẻo” là từ gần nghĩa với “mềm mại”.|gia-dinh
trong veo|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “trong suốt”?|trong veo.|gia-dinh
thơm lừng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “thơm ngát”?|thơm lừng. “thơm lừng” là từ gần nghĩa với “thơm ngát”.|gia-dinh
ngọt dịu|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “ngọt ngào”?|ngọt dịu. “ngọt dịu” là từ gần nghĩa với “ngọt ngào”.|gia-dinh
kiên cố|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “vững chắc”?|kiên cố. “kiên cố” là từ gần nghĩa với “vững chắc”.|gia-dinh
yên ổn|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “an toàn”?|yên ổn. “yên ổn” là từ gần nghĩa với “an toàn”.|gia-dinh
thân quen|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “quen thuộc”?|thân quen. “thân quen” là từ gần nghĩa với “quen thuộc”.|gia-dinh
hào phóng|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “rộng lượng”?|hào phóng. “hào phóng” là từ gần nghĩa với “rộng lượng”.|gia-dinh
lễ độ|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “lễ phép”?|lễ độ. “lễ độ” là từ gần nghĩa với “lễ phép”.|gia-dinh
công tâm|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “công bằng”?|công tâm. “công tâm” là từ gần nghĩa với “công bằng”.|gia-dinh
điềm tĩnh|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “bình tĩnh”?|điềm tĩnh. “điềm tĩnh” là từ gần nghĩa với “bình tĩnh”.|gia-dinh
tin vào bản thân|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “tự tin”?|Đó là tin vào bản thân.|gia-dinh
phối hợp|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “hợp tác”?|phối hợp. “phối hợp” là từ gần nghĩa với “hợp tác”.|gia-dinh
thành thật|Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “chân thành”?|thành thật. “thành thật” là từ gần nghĩa với “chân thành”.|gia-dinh
sạch sẽ|Từ ngữ nào viết đúng để chỉ “không bẩn và được giữ gìn gọn gàng”?|sạch sẽ. “sạch sẽ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
sắp xếp|Từ ngữ nào viết đúng để chỉ “đặt mọi thứ theo một thứ tự hợp lí”?|sắp xếp. “sắp xếp” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
xuất sắc|Từ ngữ nào viết đúng để chỉ “đạt kết quả nổi bật, rất tốt”?|xuất sắc. “xuất sắc” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
chăm sóc|Từ ngữ nào viết đúng để chỉ “quan tâm và giúp một người hoặc vật khỏe mạnh”?|chăm sóc. “chăm sóc” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
sản xuất|Từ ngữ nào viết đúng để chỉ “làm ra sản phẩm để sử dụng”?|sản xuất. “sản xuất” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
chia sẻ|Từ ngữ nào viết đúng để chỉ “cùng người khác san sẻ niềm vui hoặc khó khăn”?|chia sẻ. “chia sẻ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
sửa chữa|Từ ngữ nào viết đúng để chỉ “làm cho đồ vật hỏng dùng tốt trở lại”?|sửa chữa. “sửa chữa” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
suy nghĩ|Từ ngữ nào viết đúng để chỉ “dùng trí óc để xem xét một vấn đề”?|suy nghĩ. “suy nghĩ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
xinh xắn|Từ ngữ nào viết đúng để chỉ “có vẻ ngoài nhỏ nhắn và đáng yêu”?|xinh xắn. “xinh xắn” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
sum suê|Từ ngữ nào viết đúng để chỉ “cây cối có nhiều cành lá xanh tốt”?|sum suê. “sum suê” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
rực rỡ|Từ ngữ nào viết đúng để chỉ “có màu sắc hoặc ánh sáng nổi bật”?|rực rỡ. “rực rỡ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
sẵn sàng|Từ ngữ nào viết đúng để chỉ “đã chuẩn bị để có thể bắt đầu ngay”?|sẵn sàng. “sẵn sàng” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
giản dị|Từ ngữ nào viết đúng để chỉ “đơn giản, không cầu kì”?|giản dị. “giản dị” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
dũng cảm|Từ ngữ nào viết đúng để chỉ “không sợ nguy hiểm khi làm điều đúng”?|dũng cảm. “dũng cảm” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
kiên nhẫn|Từ ngữ nào viết đúng để chỉ “bình tĩnh chờ đợi và bền bỉ thực hiện”?|kiên nhẫn. “kiên nhẫn” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
nghỉ ngơi|Từ ngữ nào viết đúng để chỉ “tạm dừng công việc để hồi phục sức lực”?|nghỉ ngơi. “nghỉ ngơi” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
ngẫm nghĩ|Từ ngữ nào viết đúng để chỉ “suy xét chậm rãi và kĩ càng”?|ngẫm nghĩ. “ngẫm nghĩ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
nghề nghiệp|Từ ngữ nào viết đúng để chỉ “công việc chuyên môn của một người”?|nghề nghiệp. “nghề nghiệp” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
nghiêng ngả|Từ ngữ nào viết đúng để chỉ “chao qua chao lại, không đứng thẳng”?|nghiêng ngả. “nghiêng ngả” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
ghế gỗ|Từ ngữ nào viết đúng để chỉ “đồ dùng để ngồi được làm bằng gỗ”?|ghế gỗ. “ghế gỗ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
ghi nhớ|Từ ngữ nào viết đúng để chỉ “giữ một điều trong trí nhớ”?|ghi nhớ. “ghi nhớ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
con nghé|Từ ngữ nào viết đúng để chỉ “trâu còn nhỏ”?|con nghé. “con nghé” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
nghe ngóng|Từ ngữ nào viết đúng để chỉ “chú ý tìm hiểu tin tức xung quanh”?|nghe ngóng. “nghe ngóng” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
khúc khuỷu|Từ ngữ nào viết đúng để chỉ “có nhiều đoạn cong gấp, khó đi”?|khúc khuỷu. “khúc khuỷu” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
ngoằn ngoèo|Từ ngữ nào viết đúng để chỉ “uốn lượn qua nhiều hướng”?|ngoằn ngoèo. “ngoằn ngoèo” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
khuya khoắt|Từ ngữ nào viết đúng để chỉ “rất khuya, vào lúc đêm đã muộn”?|khuya khoắt. “khuya khoắt” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
khỏe khoắn|Từ ngữ nào viết đúng để chỉ “trông khỏe mạnh và nhanh nhẹn”?|khỏe khoắn. “khỏe khoắn” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
khoảnh khắc|Từ ngữ nào viết đúng để chỉ “một khoảng thời gian rất ngắn”?|khoảnh khắc. “khoảnh khắc” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
chênh vênh|Từ ngữ nào viết đúng để chỉ “ở vị trí cao và không vững”?|chênh vênh. “chênh vênh” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
bâng khuâng|Từ ngữ nào viết đúng để chỉ “có cảm xúc nhẹ nhàng, khó gọi thành tên”?|bâng khuâng. “bâng khuâng” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
lâng lâng|Từ ngữ nào viết đúng để chỉ “cảm giác nhẹ nhõm hoặc vui sướng khó tả”?|lâng lâng. “lâng lâng” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
ngăn nắp|Từ ngữ nào viết đúng để chỉ “được sắp đặt gọn và có thứ tự”?|ngăn nắp. “ngăn nắp” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
thẳng thắn|Từ ngữ nào viết đúng để chỉ “nói rõ ràng, chân thật, không quanh co”?|thẳng thắn. “thẳng thắn” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
lấp lánh|Từ ngữ nào viết đúng để chỉ “phát ra những điểm sáng nhỏ liên tiếp”?|lấp lánh. “lấp lánh” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
long lanh|Từ ngữ nào viết đúng để chỉ “có ánh sáng trong và đẹp”?|long lanh. “long lanh” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
chải chuốt|Từ ngữ nào viết đúng để chỉ “sửa soạn vẻ ngoài cẩn thận, gọn đẹp”?|chải chuốt. “chải chuốt” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
che chở|Từ ngữ nào viết đúng để chỉ “bảo vệ để người khác tránh nguy hiểm”?|che chở. “che chở” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
trân trọng|Từ ngữ nào viết đúng để chỉ “quý mến và coi trọng”?|trân trọng. “trân trọng” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
trải nghiệm|Từ ngữ nào viết đúng để chỉ “tự mình tham gia để có hiểu biết thực tế”?|trải nghiệm. “trải nghiệm” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
bền bỉ|Từ ngữ nào viết đúng để chỉ “kiên trì trong một thời gian dài”?|bền bỉ. “bền bỉ” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
vất vả|Từ ngữ nào viết đúng để chỉ “phải bỏ nhiều công sức và chịu khó khăn”?|vất vả. “vất vả” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
mãnh liệt|Từ ngữ nào viết đúng để chỉ “rất mạnh mẽ về mức độ hoặc cảm xúc”?|mãnh liệt. “mãnh liệt” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
mải miết|Từ ngữ nào viết đúng để chỉ “chăm chú làm liên tục, hầu như không ngừng”?|mải miết. “mải miết” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
dành dụm|Từ ngữ nào viết đúng để chỉ “để riêng từng chút nhằm sử dụng sau này”?|dành dụm. “dành dụm” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
tranh giành|Từ ngữ nào viết đúng để chỉ “cố lấy một thứ về phía mình”?|tranh giành. “tranh giành” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
hướng dẫn|Từ ngữ nào viết đúng để chỉ “chỉ cho người khác cách thực hiện”?|hướng dẫn. “hướng dẫn” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.|gia-dinh
`.trim().split('\n').map((line,index)=>{const [title,question,answer,category]=line.split('|');return{title,question,answer,category,index}});