import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Lock,
  ShieldAlert 
} from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { useModalContext } from '../context/ModalContext';
import type { Property, PropertyType } from '../types/property';


export const AdminPage: React.FC = () => {
  const { properties, addProperty, updateProperty, deleteProperty } = usePropertyContext();
  const { showToast } = useModalContext();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pinError, setPinError] = useState('');

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);

  // New property form state
  const [formData, setFormData] = useState<Partial<Property>>({
    title: '',
    purpose: 'buy',
    type: 'Residential Plot',
    category: 'plot',
    location: 'Gachibowli, Hyderabad',
    locality: 'Gachibowli',
    city: 'Hyderabad',
    priceDisplay: '₹45,000 / Sq. Yd',
    priceNumeric: 9000000,
    pricePerSqFt: '₹5,000 / Sq. Ft',
    area: '200 Sq. Yds',
    areaNumeric: 200,
    areaUnit: 'Sq. Yds',
    status: 'Available',
    featured: true,
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'],
    description: 'Prime residential plot with 40ft blacktop roads, underground water lines, and clear title.',
    amenities: ['Gated Community Layout', 'Clear Title', '40ft CC Roads', 'Underground Electricity'],
    highlights: ['Prime Growth Corridor', 'Immediate Registration'],
    isDemonstrationData: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin demo PIN for KK Associates
    if (pinCode === '9063' || pinCode === '1234') {
      setIsAuthenticated(true);
      setPinError('');
      showToast('Welcome to KK Associates Admin Dashboard!', 'success');
    } else {
      setPinError('Invalid Admin PIN. (Hint: Use 9063 or 1234 for demo testing)');
    }
  };

  const handleSaveProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.priceDisplay) {
      alert('Please fill title, location, and price');
      return;
    }

    if (editingPropertyId) {
      // Update existing
      const existing = properties.find(p => p.id === editingPropertyId);
      if (existing) {
        updateProperty({
          ...existing,
          ...formData as Property
        });
        showToast('Property updated successfully!', 'success');
      }
    } else {
      // Add new
      const newId = `kk-${Date.now()}`;
      const newListingId = `KK-${Math.floor(100 + Math.random() * 900)}`;
      const newProp: Property = {
        id: newId,
        listingId: newListingId,
        title: formData.title || 'New Property',
        purpose: formData.purpose || 'buy',
        type: formData.type || 'Residential Plot',
        category: formData.category || 'plot',
        location: formData.location || 'Hyderabad',
        locality: formData.locality || 'Gachibowli',
        city: 'Hyderabad',
        priceDisplay: formData.priceDisplay || 'Contact for Price',
        priceNumeric: formData.priceNumeric || 5000000,
        pricePerSqFt: formData.pricePerSqFt,
        area: formData.area || '200 Sq. Yds',
        areaNumeric: formData.areaNumeric || 200,
        areaUnit: formData.areaUnit || 'Sq. Yds',
        status: formData.status || 'Available',
        featured: formData.featured ?? true,
        images: formData.images && formData.images.length > 0 ? formData.images : ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'],
        description: formData.description || 'Verified property listing by KK Associates.',
        amenities: formData.amenities || ['Clear Title', 'Spot Registration'],
        highlights: formData.highlights || ['Prime Location'],
        isDemonstrationData: false,
        createdAt: new Date().toISOString()
      };
      addProperty(newProp);
      showToast('New property created successfully!', 'success');
    }

    setIsAddingNew(false);
    setEditingPropertyId(null);
  };

  const startEdit = (property: Property) => {
    setFormData(property);
    setEditingPropertyId(property.id);
    setIsAddingNew(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleStatus = (property: Property) => {
    const nextStatus = property.status === 'Available' ? 'Sold' : 'Available';
    updateProperty({
      ...property,
      status: nextStatus
    });
    showToast(`Property marked as ${nextStatus}`, 'info');
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 bg-[#E8F5F2] text-[#075E54] rounded-2xl flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h1 className="text-2xl font-bold font-display text-gray-900">
              Admin Portal
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              KK Associates Property Management Dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Enter Security PIN
              </label>
              <input
                type="password"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter PIN (e.g. 9063)"
                className="w-full px-4 py-3 text-center text-lg tracking-widest rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#075E54] font-mono bg-[#F8FAF8]"
              />
            </div>

            {pinError && (
              <p className="text-xs text-red-500 text-center">{pinError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm shadow-md transition-all"
            >
              Authenticate & Access Dashboard
            </button>

            <p className="text-[11px] text-gray-400 text-center">
              Demo Access PIN: <span className="font-mono font-bold text-gray-700">9063</span> or <span className="font-mono font-bold text-gray-700">1234</span>
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#075E54] text-white text-[11px] font-bold">
              Admin Portal
            </span>
            <span className="text-xs text-gray-500">
              {properties.length} Active Listings
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mt-1">
            KK Associates Property & Listings Manager
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setFormData({
                title: '',
                purpose: 'buy',
                type: 'Residential Plot',
                category: 'plot',
                location: 'Tellapur, Hyderabad',
                locality: 'Tellapur',
                city: 'Hyderabad',
                priceDisplay: '₹45,000 / Sq. Yd',
                priceNumeric: 9000000,
                pricePerSqFt: '₹5,000 / Sq. Ft',
                area: '200 Sq. Yds',
                areaNumeric: 200,
                areaUnit: 'Sq. Yds',
                status: 'Available',
                featured: true,
                images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'],
                description: 'Verified residential plot in prime gated layout with clear link documents.',
                amenities: ['Clear Title', 'Gated Layout', 'Spot Registration'],
                highlights: ['Prime Location'],
                isDemonstrationData: false
              });
              setEditingPropertyId(null);
              setIsAddingNew(!isAddingNew);
            }}
            className="px-4 py-2.5 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{isAddingNew ? 'Close Form' : 'Add New Property'}</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-red-600 border border-gray-200 rounded-xl"
          >
            Lock Dashboard
          </button>
        </div>
      </div>

      {/* Production Architecture & Persistence Notice */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
        <div className="flex items-center gap-2 font-bold text-amber-950">
          <ShieldAlert className="w-4 h-4 text-[#C7A76C]" />
          <span>Client-Side Demonstration Notice & Production Database Architecture</span>
        </div>
        <p className="leading-relaxed">
          <strong>Current Persistence:</strong> Property listing additions and edits are preserved locally in this browser using <code>localStorage</code>. Changes made here will not automatically synchronize across other public visitors' devices until a shared production database (such as Supabase, PostgreSQL, or Firebase) is connected. No confidential builder documents or private customer data should be placed in unauthenticated browser storage.
        </p>
      </div>

      {/* Add / Edit Form Drawer */}
      {isAddingNew && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 className="text-xl font-bold font-display text-gray-900">
              {editingPropertyId ? 'Edit Property Listing' : 'Add New Real Estate Listing'}
            </h2>
            <button
              onClick={() => setIsAddingNew(false)}
              className="text-xs text-gray-500 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSaveProperty} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Property Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Clear Title Villa Plot in Mokila"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Purpose *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                >
                  <option value="buy">Buy (New Listing)</option>
                  <option value="resale">Resale Property</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Property Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as PropertyType })}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                >
                  <option value="Residential Plot">Residential Plot</option>
                  <option value="Open Plot">Open Plot</option>
                  <option value="Premium Flat">Premium Flat</option>
                  <option value="Residential Apartment">Residential Apartment</option>
                  <option value="Resale Flat">Resale Flat</option>
                  <option value="Resale Plot">Resale Plot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Location in Hyderabad *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location || ''}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Mokila, Hyderabad"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Price Display *
                </label>
                <input
                  type="text"
                  required
                  value={formData.priceDisplay || ''}
                  onChange={(e) => setFormData({ ...formData, priceDisplay: e.target.value })}
                  placeholder="e.g. ₹42,000 / Sq. Yd or ₹1.85 Cr"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Area *
                </label>
                <input
                  type="text"
                  required
                  value={formData.area || ''}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g. 250 Sq. Yds or 2,200 Sq. Ft"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                >
                  <option value="Available">Available</option>
                  <option value="Under Offer">Under Offer</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={formData.images?.[0] || ''}
                  onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
                />
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#075E54] focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm rounded-xl shadow"
              >
                {editingPropertyId ? 'Save Changes' : 'Create Listing'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Existing Listings Table */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900 font-display">
            Current Properties Database
          </h2>
          <span className="text-xs text-gray-500">Live Local Storage Synchronized</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAF8] text-gray-500 uppercase text-[11px] font-bold border-b border-gray-200">
              <tr>
                <th className="py-3.5 px-4">Property</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {properties.map(p => (
                <tr key={p.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="font-bold text-gray-900 line-clamp-1">{p.title}</p>
                        <span className="text-[10px] font-mono text-gray-400">ID: {p.listingId}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-gray-700">{p.type}</td>
                  <td className="py-3.5 px-4 text-gray-600">{p.locality || p.location}</td>
                  <td className="py-3.5 px-4 font-bold text-[#075E54]">{p.priceDisplay}</td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleStatus(p)}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                        p.status === 'Available'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {p.status}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => startEdit(p)}
                        aria-label="Edit property"
                        className="p-1.5 text-gray-500 hover:text-[#075E54] hover:bg-gray-100 rounded-lg"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete ${p.title}?`)) {
                            deleteProperty(p.id);
                            showToast('Property deleted', 'info');
                          }
                        }}
                        aria-label="Delete property"
                        className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
