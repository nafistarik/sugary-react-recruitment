"use client";

import React, { useState } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { MaterialCard } from "./MaterialCard";
import { MaterialSkeletonCard } from "./MaterialSkeletonCard";
import { Material } from "@/types/materials.types";
import { useGetMaterialsQuery } from "@/redux/features/authApi";
import EmptyStateMessage from "@/components/common/EmptyStateMessage";
import ErrorMessage from "@/components/common/ErrorMessage";
import Spinner from "@/components/common/Spinner";

export function MaterialList() {
  const [page, setPage] = useState(0);
  const limit = 20;

  const { data, isLoading, isFetching, error } = useGetMaterialsQuery({
    skip: page * limit,
    limit,
    types: [1],
  });

  const loadMore = () => {
    if (data && data?.RemainingCount > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const { setElement } = useInfiniteScroll(
    loadMore,
    data ? data?.RemainingCount > 0 : false,
    isFetching
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <MaterialSkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage>Failed to load materials!!</ErrorMessage>;
  }

  if (!data || data?.Materials.length === 0) {
    return <EmptyStateMessage message="No materials found" />;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data?.Materials.map((material: Material) => (
          <MaterialCard key={material.Id} material={material} />
        ))}
      </div>

      {isFetching && <Spinner />}

      {data?.RemainingCount === 0 && (
        <p className="text-center text-muted-foreground py-4">
          No more materials to load
        </p>
      )}

      <div ref={setElement} className="h-4" />
    </div>
  );
}
