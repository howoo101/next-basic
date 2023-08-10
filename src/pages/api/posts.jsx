import { connectMongoDB } from '@/src/libs/MongoConnect';
import { Community } from '@/src/model/CommunitySchema';
import { Counter } from '@/src/model/CounterSchema';

//안쪽에서 await로 동기화 처리할 예정이므로 wrapping함수에 async지정
export default async function handler(req, res) {
	//전달된 요청이 GET일떄 처리 (글 호출)
	if (req.method === 'GET') {
		try {
			await connectMongoDB();
			const community = await Community.find();
			res.status(200).send(community);
		} catch (err) {
			res.status(400).send({ err });
		}
	}
	if (req.method === 'POST') {
		const temp = req.body;
		try {
			await connectMongoDB();
			Counter.findOne({ name: 'counter' })
				.exec()
				.then((doc) => {
					// 카운터 모델에서 글번호 가져와서 글번호 추가
					temp.communityNum = doc.communityNum;

					const communityModel = new Community(temp);
					communityModel
						.save()
						.then(() => {
							// 글저장 완료되면 글번호 1증가
							Counter.updateOne(({ name: 'counter' }, { $inc: { communityNum: 1 } }))
								.exec()
								.then(() => {
									res.json({ success: true });
								});
						})
						.catch((err) => res.json({ success: false, err: err }));
				});
		} catch (err) {
			//요청 실패시 실행될 구문
			console.log(err);
			res.send('error!');
		}
	}
}
