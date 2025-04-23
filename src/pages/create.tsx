
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const CreateEventPage = () => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập submit thành công
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Tạo Sự Kiện Mới</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-700 rounded p-6 text-center mb-8">
            🎉 Sự kiện đã được tạo thành công (giả lập)!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-8">
            <div>
              <label className="block mb-1 font-medium">Tên sự kiện</label>
              <Input name="title" value={form.title} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Ngày tổ chức</label>
              <Input type="date" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Địa điểm</label>
              <Input name="location" value={form.location} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mô tả sự kiện</label>
              <Textarea name="description" value={form.description} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-aevent-primary hover:bg-aevent-secondary">
              Tạo Sự Kiện
            </Button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default CreateEventPage;
