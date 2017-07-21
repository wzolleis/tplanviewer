package de.tpv.aws.client

import com.amazonaws.auth.AWSStaticCredentialsProvider
import com.amazonaws.auth.BasicAWSCredentials
import com.amazonaws.services.s3.AmazonS3ClientBuilder
import com.amazonaws.regions.AwsEnvVarOverrideRegionProvider
import com.sun.awt.SecurityWarning.getSize
import com.amazonaws.services.s3.model.S3ObjectSummary
import com.amazonaws.services.s3.model.ListObjectsV2Result
import com.amazonaws.services.s3.model.ListObjectsV2Request


fun main(args: Array<String>) {
    val awsCreds = BasicAWSCredentials("AKIAJBFRNLDCXGMT6VEA", "")
    var s3Client = AmazonS3ClientBuilder.standard()
            .withCredentials(AWSStaticCredentialsProvider(awsCreds))
            .withRegion("eu-central-1") //regionProvider.getRegion())
            .build()

    val buckets = s3Client.listBuckets();
    for (bucket in buckets) {
        println(bucket.name);
    }

    val listObjectsRequest = ListObjectsV2Request()
    listObjectsRequest.bucketName = "de.wz.tpv"
    val result = s3Client.listObjectsV2(listObjectsRequest)

    for (summary in result.getObjectSummaries()) {
        println(summary.getKey() + ":" + summary.getSize())
    }

}