'use client'
import React, { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast';
import { API_URL } from '@/lib/utils';
import axios, { AxiosResponse } from 'axios';
import { PropertyType } from '@/lib/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropertyCard from './PropertyCard';

const AllProperties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10; // Number of properties per page

  const { toast } = useToast();

  const fetchProperties = async () => {
    try {

      const res: AxiosResponse = await axios.get(`${API_URL}/properties/all-list?page=${page}&limit=${limit}`);
      const data: PropertyType[] = await res.data
      setProperties((prev) => [...prev, ...data])
      setPage(prev => prev + 1)

    } catch (error) {
      toast({
        title: 'Something went wrong!!',
        description: `Cant't fetch properties`
      })
    }
  }


  useEffect(() => {
    return () => {
      fetchProperties();
      console.log('fetched!!')
    }
  }, [])

  const fetchMoreProperties = async () => {
    await fetchProperties(); // Fetch more properties as user scrolls
  }


  return (
    <InfiniteScroll
      dataLength={properties.length}
      next={fetchMoreProperties}
      loader={<div>Loding...</div>}
      hasMore={
        ((page - 1) * limit) < properties.length
          ? true
          : false
      }
    >
      <section className='properties-sec'>
        {
          properties.map((property: PropertyType, key: number) => (
            <PropertyCard
              key={key}
              {...property}
            />
          ))
        }
      </section>
    </InfiniteScroll>
  )
}

export default AllProperties
