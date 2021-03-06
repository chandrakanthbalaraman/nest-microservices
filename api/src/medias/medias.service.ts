import { Injectable, Inject } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { REDIS } from '../app.constants';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './interfaces/media.interface';

@Injectable()
export class MediasService {
  constructor(@Inject(REDIS.PROXY_NAME) private readonly client: ClientProxy) { }

  create(createMediaDto: CreateMediaDto) {
    return this.client.send("create_media", createMediaDto);
  }

  update(_id: string, updateMediaDto: UpdateMediaDto) {
    return this.client.send("update_media", { _id, ...updateMediaDto });
  }

  getById(_id: string) {
    return this.client.send<Media>("get_media_by_id", { _id });
  }

  get() {
    return this.client.send<Media[]>("get_medias", {});
  }
}