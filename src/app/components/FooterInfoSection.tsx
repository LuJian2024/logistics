// components/TestimonialSection.tsx
export default function FooterInfoSection() {
    return (
      <div className="bg-gray-100 p-8 rounded-lg">
        <blockquote className="mb-6">
          <p className="text-2xl italic">"We partnered with Unititled for our rebrand and launch and raised over $40M in our Series A."</p>
        </blockquote>
        
        <div className="space-y-4">
          <div>
            <span className="block text-sm font-semibold">Partner:</span>
            <span>Catalog</span>
          </div>
          
          <div>
            <span className="block text-sm font-semibold">Website:</span>
            <span>gatezatalog.io</span>
          </div>
          
          <div>
            <span className="block text-sm font-semibold">Year:</span>
            <span>February 2022</span>
          </div>
          
          <div>
            <span className="block text-sm font-semibold">Investment:</span>
            <span>$40,000,000</span>
          </div>
          
          <div>
            <span className="block text-sm font-semibold">Services:</span>
            <ul className="list-disc list-inside">
              <li>Brand Strategy</li>
              <li>Website Design</li>
              <li>Microsoft Studio</li>
              <li>Pitch Docs Design</li>
              <li>Webflow Development</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }