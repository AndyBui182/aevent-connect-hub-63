
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Calendar,
  Clock,
  MapPin,
  Globe,
  Tag,
  FileText,
  Link,
  Image,
  Handshake,
  Users
} from 'lucide-react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';

// Define our event schema
const eventSchema = z.object({
  title: z.string().min(3, { message: "Tên sự kiện phải có ít nhất 3 ký tự" }),
  description: z.string().min(20, { message: "Mô tả sự kiện phải có ít nhất 20 ký tự" }),
  date: z.string().min(1, { message: "Vui lòng chọn ngày" }),
  time: z.string().optional(),
  endDate: z.string().optional(),
  endTime: z.string().optional(),
  location: z.string().min(1, { message: "Vui lòng nhập địa điểm" }),
  imageUrl: z.string().optional(),
  category: z.string().min(1, { message: "Vui lòng chọn danh mục" }),
  isOnline: z.boolean().default(false),
  website: z.string().url({ message: "URL không hợp lệ" }).optional().or(z.literal('')),
  maxAttendees: z.string().optional(),
  lookingForPartners: z.boolean().default(false),
  hashtags: z.string().optional(),
  organizerName: z.string().min(1, { message: "Vui lòng nhập tên tổ chức" }),
  organizerLogo: z.string().optional(),
  attachment: z.string().optional()
});

type EventFormValues = z.infer<typeof eventSchema>;

const CreateEventPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [previewImage, setPreviewImage] = useState("");
  const [previewLogo, setPreviewLogo] = useState("");
  
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: '',
      endDate: '',
      endTime: '',
      location: '',
      imageUrl: '',
      category: '',
      isOnline: false,
      website: '',
      maxAttendees: '',
      lookingForPartners: false,
      hashtags: '',
      organizerName: '',
      organizerLogo: '',
      attachment: ''
    }
  });

  const onSubmit = (values: EventFormValues) => {
    console.log(values);
    // Giả lập submit thành công
    toast({
      title: "Sự kiện đã được tạo thành công!",
      description: "Sự kiện của bạn đã được gửi để xét duyệt.",
      variant: "default",
    });
    
    // Redirect to events page after successful submission
    setTimeout(() => {
      navigate('/events');
    }, 2000);
  };

  // Sample categories
  const categories = ['Competition', 'Conference', 'Summit', 'Workshop', 'Networking', 'Forum'];
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      form.setValue('imageUrl', imageUrl);
    }
  };
  
  // Handle logo upload preview
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setPreviewLogo(logoUrl);
      form.setValue('organizerLogo', logoUrl);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Tạo Sự Kiện Mới</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
                <TabsTrigger value="details">Chi tiết</TabsTrigger>
                <TabsTrigger value="organizer">Nhà tổ chức</TabsTrigger>
                <TabsTrigger value="additional">Bổ sung</TabsTrigger>
              </TabsList>
              
              {/* Basic Info Tab */}
              <TabsContent value="basic" className="space-y-6 bg-white rounded-lg shadow p-8">
                <h2 className="text-xl font-medium pb-2 border-b mb-6">Thông tin cơ bản</h2>
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên sự kiện*</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập tên sự kiện..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mô tả sự kiện*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Mô tả chi tiết về sự kiện..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ngày bắt đầu*</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input type="date" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Giờ bắt đầu</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input type="time" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ngày kết thúc</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input type="date" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Giờ kết thúc</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input type="time" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Địa điểm*</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input placeholder="Nhập địa điểm..." className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Danh mục*</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              onChange={(e) => field.onChange(e.target.value)}
                              value={field.value}
                            >
                              <option value="">Chọn danh mục</option>
                              {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button type="button" onClick={() => setActiveTab("details")}>
                    Tiếp theo
                  </Button>
                </div>
              </TabsContent>
              
              {/* Details Tab */}
              <TabsContent value="details" className="space-y-6 bg-white rounded-lg shadow p-8">
                <h2 className="text-xl font-medium pb-2 border-b mb-6">Thông tin chi tiết</h2>
                
                <div>
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel>Ảnh bìa sự kiện</FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            {previewImage && (
                              <div className="relative w-full h-48 bg-gray-100 rounded overflow-hidden">
                                <img src={previewImage} alt="Event cover" className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div className="flex items-center gap-4">
                              <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400">
                                <div className="flex items-center space-x-2">
                                  <Image className="h-5 w-5 text-gray-500" />
                                  <span className="text-sm text-gray-500">Tải lên ảnh bìa</span>
                                </div>
                                <Input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleImageChange}
                                  {...fieldProps}
                                />
                              </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="isOnline"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Sự kiện trực tuyến</FormLabel>
                        <div className="text-sm text-muted-foreground">
                          Sự kiện sẽ diễn ra trực tuyến
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website sự kiện</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input placeholder="https://..." className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="maxAttendees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số lượng người tham dự tối đa</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input type="number" placeholder="Không giới hạn" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="hashtags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hashtags</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input placeholder="#startup #innovation" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <p className="text-xs text-gray-500 mt-1">Phân tách các hashtag bằng dấu cách</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("basic")}>
                    Quay lại
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("organizer")}>
                    Tiếp theo
                  </Button>
                </div>
              </TabsContent>
              
              {/* Organizer Tab */}
              <TabsContent value="organizer" className="space-y-6 bg-white rounded-lg shadow p-8">
                <h2 className="text-xl font-medium pb-2 border-b mb-6">Thông tin nhà tổ chức</h2>
                
                <FormField
                  control={form.control}
                  name="organizerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên nhà tổ chức*</FormLabel>
                      <FormControl>
                        <Input placeholder="Tên công ty hoặc tổ chức..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organizerLogo"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Logo nhà tổ chức</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          {previewLogo && (
                            <div className="relative w-20 h-20 bg-gray-100 rounded-full overflow-hidden">
                              <img src={previewLogo} alt="Organizer logo" className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex items-center gap-4">
                            <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400">
                              <div className="flex items-center space-x-2">
                                <Image className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500">Tải lên logo</span>
                              </div>
                              <Input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleLogoChange}
                                {...fieldProps}
                              />
                            </label>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("details")}>
                    Quay lại
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("additional")}>
                    Tiếp theo
                  </Button>
                </div>
              </TabsContent>
              
              {/* Additional Tab */}
              <TabsContent value="additional" className="space-y-6 bg-white rounded-lg shadow p-8">
                <h2 className="text-xl font-medium pb-2 border-b mb-6">Thông tin bổ sung</h2>
                
                <FormField
                  control={form.control}
                  name="lookingForPartners"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <FormLabel className="text-base">Tìm kiếm đối tác</FormLabel>
                          <Handshake className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Hiển thị nhãn "Looking for partners" trên sự kiện
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="attachment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tài liệu đính kèm</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <Input
                            type="file"
                            className="pl-10"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                field.onChange(file.name);
                              }
                            }}
                          />
                        </div>
                      </FormControl>
                      <p className="text-xs text-gray-500 mt-1">Hỗ trợ file PDF, DOCX, PPT (tối đa 10MB)</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("organizer")}>
                    Quay lại
                  </Button>
                  <Button type="submit" className="bg-aevent-primary hover:bg-aevent-secondary">
                    Tạo Sự Kiện
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default CreateEventPage;

