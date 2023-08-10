import data from '@/public/members.json';

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(data);
	} else if (req.method === 'POST') {
		res.status(200).json(req.body + 1);
	}
}
