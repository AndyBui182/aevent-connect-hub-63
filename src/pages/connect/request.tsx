
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const CollaborationRequestPage = () => {
  const [form, setForm] = useState({
    organizer: '',
    eventName: '',
    need: '',
    details: '',
    contact: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Đăng Yêu Cầu Hợp Tác</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-700 rounded p-6 text-center mb-8">
            ✅ Yêu cầu của bạn đã được gửi thành công (giả lập)!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-8">
            <div>
              <label className="block mb-1 font-medium">Tên đơn vị tổ chức</label>
              <Input name="organizer" value={form.organizer} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Tên sự kiện</label>
              <Input name="eventName" value={form.eventName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Bạn cần gì? (VD: đối tác, sponsor,...)</label>
              <Input name="need" value={form.need} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Chi tiết yêu cầu</label>
              <Textarea name="details" value={form.details} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Thông tin liên hệ</label>
              <Input name="contact" value={form.contact} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-aevent-primary hover:bg-aevent-secondary">
              Đăng yêu cầu hợp tác
            </Button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default CollaborationRequestPage;
